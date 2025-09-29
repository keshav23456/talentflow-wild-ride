import { useState } from "react";
import { Play, Plus, Edit, Trash, Clock, Target, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { mockAssessments, type Assessment } from "@/data/assessmentData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export default function AssessmentBuilder() {
  const [assessments] = useState<Assessment[]>(mockAssessments);
  const { toast } = useToast();

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };

  const handlePreview = (assessment: Assessment) => {
    toast({
      title: "Assessment Preview",
      description: `Opening preview for ${assessment.title}`,
    });
  };

  const getDifficultyColor = (passingScore: number) => {
    if (passingScore >= 80) return "text-red-500 bg-red-500/10 border-red-500/20";
    if (passingScore >= 70) return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
    return "text-green-500 bg-green-500/10 border-green-500/20";
  };

  const getDifficultyLabel = (passingScore: number) => {
    if (passingScore >= 80) return "Hard";
    if (passingScore >= 70) return "Medium";
    return "Easy";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Assessment Builder</h1>
          <p className="text-muted-foreground mt-1">Create and manage technical assessments for candidates</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          Create Assessment
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card hover-lift">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">{assessments.length}</div>
            <p className="text-sm text-muted-foreground">Total Assessments</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card hover-lift">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-accent">
              {assessments.reduce((sum, a) => sum + a.questions.length, 0)}
            </div>
            <p className="text-sm text-muted-foreground">Total Questions</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card hover-lift">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-warning">
              {Math.round(assessments.reduce((sum, a) => sum + a.duration, 0) / assessments.length)}
            </div>
            <p className="text-sm text-muted-foreground">Avg Duration (min)</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card hover-lift">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-success">
              {Math.round(assessments.reduce((sum, a) => sum + a.passingScore, 0) / assessments.length)}%
            </div>
            <p className="text-sm text-muted-foreground">Avg Passing Score</p>
          </CardContent>
        </Card>
      </div>

      {/* Assessments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {assessments.map((assessment) => (
          <Card key={assessment.id} className="glass-card hover-lift group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Badge className={`text-xs border ${getDifficultyColor(assessment.passingScore)}`}>
                      {getDifficultyLabel(assessment.passingScore)}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {assessment.questions.length} Questions
                    </Badge>
                  </div>
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {assessment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {assessment.description}
                  </p>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="glass-card">
                    <DropdownMenuItem onClick={() => handlePreview(assessment)}>
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Assessment
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText className="w-4 h-4 mr-2" />
                      View Results
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <Trash className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  {formatDuration(assessment.duration)}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Target className="w-4 h-4 mr-2" />
                  {assessment.passingScore}% to pass
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="text-xs text-muted-foreground">
                  Created {new Date(assessment.createdAt).toLocaleDateString()}
                </div>
                
                <Button 
                  size="sm" 
                  className="bg-gradient-primary hover:opacity-90"
                  onClick={() => handlePreview(assessment)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}