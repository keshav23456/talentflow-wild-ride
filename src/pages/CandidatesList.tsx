import { useState, useMemo } from "react";
import { Search, Users, Filter, MoreHorizontal, Eye, MessageSquare, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { mockCandidates, mockJobs, type Candidate } from "@/data/mockData";
import { Link } from "react-router-dom";

export default function CandidatesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("all");

  const filteredCandidates = useMemo(() => {
    return mockCandidates.filter(candidate => {
      const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStage = stageFilter === "all" || candidate.stage === stageFilter;
      
      return matchesSearch && matchesStage;
    });
  }, [searchTerm, stageFilter]);

  const getJobTitle = (jobId: string) => {
    return mockJobs.find(job => job.id === jobId)?.title || "Unknown Position";
  };

  const getStageColor = (stage: Candidate['stage']) => {
    const colors = {
      applied: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      screening: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      interview: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      assessment: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      offer: 'bg-green-500/10 text-green-500 border-green-500/20',
      hired: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      rejected: 'bg-red-500/10 text-red-500 border-red-500/20'
    };
    return colors[stage] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  const stageCounts = useMemo(() => {
    const counts = mockCandidates.reduce((acc, candidate) => {
      acc[candidate.stage] = (acc[candidate.stage] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return counts;
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Candidates</h1>
          <p className="text-muted-foreground mt-1">Manage candidate applications and track their progress</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
          <Users className="w-4 h-4 mr-2" />
          View Kanban Board
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {Object.entries(stageCounts).map(([stage, count]) => (
          <Card key={stage} className="glass-card hover-lift">
            <CardContent className="p-4">
              <div className="text-xl font-bold">{count}</div>
              <p className="text-xs text-muted-foreground capitalize">{stage.replace('_', ' ')}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="glass-card p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search candidates by name, email, or skills..."
              className="pl-10 bg-muted/30"
            />
          </div>
          
          <Select value={stageFilter} onValueChange={setStageFilter}>
            <SelectTrigger className="w-[180px] bg-muted/30">
              <SelectValue placeholder="Filter by stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              <SelectItem value="applied">Applied</SelectItem>
              <SelectItem value="screening">Screening</SelectItem>
              <SelectItem value="interview">Interview</SelectItem>
              <SelectItem value="assessment">Assessment</SelectItem>
              <SelectItem value="offer">Offer</SelectItem>
              <SelectItem value="hired">Hired</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          {/* More Filters removed as requested */}
        </div>
      </div>

      {/* Candidates List */}
      <div className="space-y-4">
        {filteredCandidates.slice(0, 50).map((candidate) => (
          <Card key={candidate.id} className="glass-card hover-lift group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1 min-w-0">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium text-sm">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Candidate Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                        {candidate.name}
                      </h3>
                      <Badge className={`text-xs border ${getStageColor(candidate.stage)}`}>
                        {candidate.stage.replace('_', ' ')}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="truncate">{candidate.email}</span>
                      <span>•</span>
                      <span>{candidate.experience} years exp</span>
                      <span>•</span>
                      <span className="truncate">{getJobTitle(candidate.jobId)}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {candidate.skills.slice(0, 4).map(skill => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {candidate.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{candidate.skills.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to={`/candidates/${candidate.id}`}>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="w-4 h-4" />
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="glass-card">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Add Note
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Archive className="w-4 h-4 mr-2" />
                        Move to Stage
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCandidates.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-muted/50 rounded-full flex items-center justify-center">
            <Users className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No candidates found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {filteredCandidates.length > 50 && (
        <div className="text-center py-6">
          <p className="text-muted-foreground mb-4">
            Showing first 50 of {filteredCandidates.length} candidates
          </p>
          <Button variant="outline">Load More</Button>
        </div>
      )}
    </div>
  );
}