export interface AnalyticsMetric {
  label: string;
  value: number;
  change: number; // percentage change from previous period
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export interface ChartData {
  name: string;
  value?: number;
  [key: string]: any;
}

export interface TimeSeriesData {
  date: string;
  applications: number;
  interviews: number;
  hires: number;
}

// Mock analytics data
export const mockMetrics: AnalyticsMetric[] = [
  {
    label: "Total Applications",
    value: 2847,
    change: 12.5,
    trend: "up",
    color: "text-blue-500"
  },
  {
    label: "Active Jobs",
    value: 23,
    change: -8.2,
    trend: "down", 
    color: "text-green-500"
  },
  {
    label: "Interview Rate",
    value: 34.8,
    change: 5.7,
    trend: "up",
    color: "text-purple-500"
  },
  {
    label: "Hire Rate",
    value: 8.2,
    change: 2.1,
    trend: "up",
    color: "text-orange-500"
  },
  {
    label: "Time to Hire (days)",
    value: 18.5,
    change: -15.3,
    trend: "down",
    color: "text-red-500"
  },
  {
    label: "Cost per Hire",
    value: 4250,
    change: -8.7,
    trend: "down",
    color: "text-indigo-500"
  }
];

export const mockApplicationsOverTime: TimeSeriesData[] = [
  { date: "2024-01", applications: 180, interviews: 65, hires: 12 },
  { date: "2024-02", applications: 220, interviews: 78, hires: 15 },
  { date: "2024-03", applications: 195, interviews: 71, hires: 13 },
  { date: "2024-04", applications: 285, interviews: 95, hires: 18 },
  { date: "2024-05", applications: 310, interviews: 112, hires: 22 },
  { date: "2024-06", applications: 275, interviews: 89, hires: 19 },
  { date: "2024-07", applications: 340, interviews: 125, hires: 28 },
  { date: "2024-08", applications: 295, interviews: 105, hires: 24 },
  { date: "2024-09", applications: 385, interviews: 142, hires: 31 },
  { date: "2024-10", applications: 420, interviews: 156, hires: 35 },
  { date: "2024-11", applications: 390, interviews: 148, hires: 32 },
  { date: "2024-12", applications: 445, interviews: 168, hires: 38 }
];

export const mockDepartmentData: ChartData[] = [
  { name: "Engineering", applications: 1250, hires: 85, color: "#3b82f6" },
  { name: "Product", applications: 340, hires: 28, color: "#8b5cf6" },
  { name: "Design", applications: 280, hires: 22, color: "#06d6a0" },
  { name: "Marketing", applications: 420, hires: 31, color: "#f59e0b" },
  { name: "Sales", applications: 380, hires: 42, color: "#ef4444" },
  { name: "HR", applications: 177, hires: 15, color: "#84cc16" }
];

export const mockSourceData: ChartData[] = [
  { name: "LinkedIn", value: 35, color: "#0077b5" },
  { name: "Indeed", value: 28, color: "#2557a7" },
  { name: "Company Website", value: 22, color: "#1f2937" },
  { name: "Referrals", value: 15, color: "#059669" },
  { name: "Other", value: 10, color: "#6b7280" }
];

export const mockStageConversion = [
  { stage: "Applied", count: 2847, percentage: 100 },
  { stage: "Screening", count: 1423, percentage: 50 },
  { stage: "Interview", count: 852, percentage: 30 },
  { stage: "Assessment", count: 426, percentage: 15 },
  { stage: "Offer", count: 284, percentage: 10 },
  { stage: "Hired", count: 227, percentage: 8 }
];

export const mockTopJobs = [
  {
    title: "Senior Frontend Developer",
    applications: 342,
    interviews: 89,
    hires: 12,
    conversion: 3.5
  },
  {
    title: "Backend Engineer", 
    applications: 298,
    interviews: 76,
    hires: 11,
    conversion: 3.7
  },
  {
    title: "Product Manager",
    applications: 186,
    interviews: 52,
    hires: 8,
    conversion: 4.3
  },
  {
    title: "UX Designer",
    applications: 164,
    interviews: 41,
    hires: 6,
    conversion: 3.7
  },
  {
    title: "Data Scientist",
    applications: 127,
    interviews: 35,
    hires: 5,
    conversion: 3.9
  }
];

export const mockTeamPerformance = [
  {
    member: "Sarah Johnson",
    role: "Senior Recruiter",
    jobsManaged: 8,
    applications: 456,
    hires: 32,
    timeToHire: 16.2,
    rating: 4.8
  },
  {
    member: "Michael Chen",
    role: "Technical Recruiter", 
    jobsManaged: 6,
    applications: 298,
    hires: 21,
    timeToHire: 19.5,
    rating: 4.6
  },
  {
    member: "Emily Rodriguez",
    role: "Recruiter",
    jobsManaged: 5,
    applications: 234,
    hires: 18,
    timeToHire: 22.1,
    rating: 4.4
  },
  {
    member: "David Park",
    role: "Senior Recruiter",
    jobsManaged: 7,
    applications: 389,
    hires: 28,
    timeToHire: 17.8,
    rating: 4.7
  }
];