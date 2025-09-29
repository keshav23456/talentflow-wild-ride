import { useState, useMemo } from "react";
import { Plus, Search, Filter, Archive, MoreHorizontal, Edit, Trash, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { mockJobs, type Job } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

export default function JobsBoard() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { toast } = useToast();

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    jobs.forEach(job => job.tags.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [jobs]);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || job.status === statusFilter;
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => job.tags.includes(tag));
      
      return matchesSearch && matchesStatus && matchesTags;
    });
  }, [jobs, searchTerm, statusFilter, selectedTags]);

  const handleArchiveJob = (jobId: string) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId 
        ? { ...job, status: job.status === 'archived' ? 'active' : 'archived' as Job['status'] }
        : job
    ));
    
    const job = jobs.find(j => j.id === jobId);
    toast({
      title: job?.status === 'archived' ? "Job Unarchived" : "Job Archived",
      description: `${job?.title} has been ${job?.status === 'archived' ? 'unarchived' : 'archived'}.`,
    });
  };

  const handleDeleteJob = (jobId: string) => {
    const job = jobs.find(j => j.id === jobId);
    setJobs(prev => prev.filter(j => j.id !== jobId));
    toast({
      title: "Job Deleted",
      description: `${job?.title} has been permanently deleted.`,
      variant: "destructive",
    });
  };

  const getStatusBadgeVariant = (status: Job['status']) => {
    switch (status) {
      case 'active': return 'default';
      case 'archived': return 'secondary';
      case 'draft': return 'outline';
      default: return 'default';
    }
  };

  const formatSalary = (salary: Job['salary']) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: salary.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Jobs Board</h1>
          <p className="text-muted-foreground mt-1">Manage your job postings and track applications</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          Create Job
        </Button>
      </div>

      {/* Filters */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search jobs by title or department..."
              className="pl-10 bg-muted/30"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] bg-muted/30">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="bg-muted/30">
            <Filter className="w-4 h-4 mr-2" />
            Tags
          </Button>
        </div>

        {/* Tags filter */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 15).map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => {
                  setSelectedTags(prev => 
                    prev.includes(tag) 
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  );
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card hover-lift">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">
              {jobs.filter(j => j.status === 'active').length}
            </div>
            <p className="text-sm text-muted-foreground">Active Jobs</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card hover-lift">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-accent">
              {jobs.reduce((sum, job) => sum + job.applicantsCount, 0)}
            </div>
            <p className="text-sm text-muted-foreground">Total Applications</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card hover-lift">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-warning">
              {jobs.filter(j => j.status === 'draft').length}
            </div>
            <p className="text-sm text-muted-foreground">Draft Jobs</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card hover-lift">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-success">
              {Math.round(jobs.reduce((sum, job) => sum + job.applicantsCount, 0) / jobs.length)}
            </div>
            <p className="text-sm text-muted-foreground">Avg. Applications</p>
          </CardContent>
        </Card>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="glass-card hover-lift group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <Badge variant={getStatusBadgeVariant(job.status)} className="text-xs">
                    {job.status}
                  </Badge>
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="glass-card">
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Job
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleArchiveJob(job.id)}>
                      <Archive className="w-4 h-4 mr-2" />
                      {job.status === 'archived' ? 'Unarchive' : 'Archive'}
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleDeleteJob(job.id)}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{job.department}</span>
                <span>{job.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {job.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {job.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{job.tags.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="text-sm">
                  <div className="font-medium">{formatSalary(job.salary)}</div>
                  <div className="text-muted-foreground">{job.type.replace('-', ' ')}</div>
                </div>
                
                <div className="text-right text-sm">
                  <div className="font-medium text-primary">{job.applicantsCount}</div>
                  <div className="text-muted-foreground">applicants</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-muted/50 rounded-full flex items-center justify-center">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No jobs found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}