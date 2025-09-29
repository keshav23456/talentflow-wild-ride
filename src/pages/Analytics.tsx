import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Briefcase, 
  Clock, 
  DollarSign,
  Target,
  Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  mockMetrics,
  mockApplicationsOverTime,
  mockDepartmentData,
  mockSourceData,
  mockStageConversion,
  mockTopJobs,
  mockTeamPerformance,
  type AnalyticsMetric
} from "@/data/analyticsData";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function Analytics() {
  const renderTrendIcon = (trend: AnalyticsMetric['trend']) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <div className="w-4 h-4" />;
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground mt-1">Track hiring metrics, conversion rates, and team performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMetrics.map((metric, index) => (
          <Card key={index} className="glass-card hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>
                    {typeof metric.value === 'number' && metric.value > 1000 ? formatNumber(metric.value) : metric.value}
                    {metric.label.includes('Rate') || metric.label.includes('Cost') ? '%' : ''}
                    {metric.label.includes('Cost') && '$'}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  {renderTrendIcon(metric.trend)}
                  <span className={`text-sm ${metric.trend === 'up' ? 'text-green-500' : metric.trend === 'down' ? 'text-red-500' : 'text-gray-500'}`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Applications Over Time */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Applications Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockApplicationsOverTime}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="applications" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="interviews" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="hires" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Performance */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockDepartmentData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="applications" fill="#3b82f6" />
                <Bar dataKey="hires" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Additional Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Application Sources */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Application Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockSourceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {mockSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Conversion Funnel */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Hiring Funnel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockStageConversion.map((stage, index) => (
              <div key={stage.stage} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{stage.stage}</span>
                  <div className="text-sm text-muted-foreground">
                    {formatNumber(stage.count)} ({stage.percentage}%)
                  </div>
                </div>
                <Progress value={stage.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Top Jobs Performance */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Top Performing Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTopJobs.map((job, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{job.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                    <span>{formatNumber(job.applications)} applications</span>
                    <span>•</span>
                    <span>{job.interviews} interviews</span>
                    <span>•</span>
                    <span>{job.hires} hires</span>
                  </div>
                </div>
                <Badge variant="outline" className="ml-4">
                  {job.conversion}% conversion
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Team Performance */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Team Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTeamPerformance.map((member, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {member.member.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium">{member.member}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="font-medium">{member.jobsManaged}</div>
                    <div className="text-muted-foreground">Jobs</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{formatNumber(member.applications)}</div>
                    <div className="text-muted-foreground">Applications</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{member.hires}</div>
                    <div className="text-muted-foreground">Hires</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{member.timeToHire}d</div>
                    <div className="text-muted-foreground">Avg Time</div>
                  </div>
                  <Badge variant="outline" className="ml-4">
                    ⭐ {member.rating}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}