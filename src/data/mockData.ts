export interface Job {
  id: string;
  title: string;
  slug: string;
  status: 'active' | 'archived' | 'draft';
  tags: string[];
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  createdAt: string;
  updatedAt: string;
  applicantsCount: number;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  stage: 'applied' | 'screening' | 'interview' | 'assessment' | 'offer' | 'hired' | 'rejected';
  jobId: string;
  resumeUrl?: string;
  experience: number;
  skills: string[];
  notes: Note[];
  createdAt: string;
  updatedAt: string;
  timeline: TimelineEvent[];
}

export interface Note {
  id: string;
  content: string;
  mentions: string[];
  createdAt: string;
  author: string;
}

export interface TimelineEvent {
  id: string;
  type: 'stage_change' | 'note_added' | 'interview_scheduled' | 'assessment_completed';
  description: string;
  fromStage?: string;
  toStage?: string;
  createdAt: string;
  author: string;
}

// Mock data generation
const jobTitles = [
  'Senior Frontend Developer', 'Backend Engineer', 'Full Stack Developer', 'DevOps Engineer',
  'Product Manager', 'UX Designer', 'Data Scientist', 'Machine Learning Engineer',
  'QA Engineer', 'Mobile Developer', 'Technical Lead', 'Software Architect',
  'Product Designer', 'Growth Marketing Manager', 'Customer Success Manager',
  'Sales Representative', 'Business Analyst', 'Scrum Master', 'Engineering Manager',
  'Security Engineer', 'Database Administrator', 'Cloud Engineer', 'AI Researcher',
  'Content Writer', 'HR Business Partner'
];

const tags = [
  'React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java', 'Go', 'TypeScript',
  'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL',
  'Mobile', 'iOS', 'Android', 'Flutter', 'React Native', 'Machine Learning',
  'Data Science', 'DevOps', 'CI/CD', 'Agile', 'Scrum', 'Leadership', 'Remote'
];

const departments = ['Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'HR', 'Operations'];
const locations = ['San Francisco', 'New York', 'London', 'Berlin', 'Toronto', 'Sydney', 'Remote'];

// Generate 25 jobs
export const mockJobs: Job[] = Array.from({ length: 25 }, (_, index) => {
  const title = jobTitles[index % jobTitles.length];
  const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 5) + 2);
  const department = departments[Math.floor(Math.random() * departments.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const status: Job['status'] = Math.random() > 0.8 ? 'archived' : Math.random() > 0.9 ? 'draft' : 'active';
  
  return {
    id: `job-${index + 1}`,
    title,
    slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
    status,
    tags: randomTags,
    department,
    location,
    type: ['full-time', 'part-time', 'contract', 'internship'][Math.floor(Math.random() * 4)] as Job['type'],
    description: `We are looking for a talented ${title} to join our ${department} team. This is an exciting opportunity to work on cutting-edge projects and make a significant impact.`,
    requirements: [
      '3+ years of relevant experience',
      'Strong communication skills',
      'Team player with leadership qualities',
      'Experience with modern development practices'
    ],
    salary: {
      min: 60000 + Math.floor(Math.random() * 100000),
      max: 100000 + Math.floor(Math.random() * 150000),
      currency: 'USD'
    },
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    applicantsCount: Math.floor(Math.random() * 50) + 1
  };
});

// Generate names for candidates
const firstNames = [
  'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason', 'Isabella', 'William',
  'Mia', 'James', 'Charlotte', 'Benjamin', 'Amelia', 'Lucas', 'Harper', 'Henry', 'Evelyn', 'Alexander',
  'Abigail', 'Michael', 'Emily', 'Daniel', 'Elizabeth', 'Jacob', 'Mila', 'Logan', 'Ella', 'Jackson',
  'Avery', 'Levi', 'Sofia', 'Sebastian', 'Camila', 'Mateo', 'Aria', 'Jack', 'Scarlett', 'Owen',
  'Victoria', 'Theodore', 'Madison', 'Aiden', 'Luna', 'Samuel', 'Grace', 'Joseph', 'Chloe', 'John'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
  'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
  'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
  'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts'
];

const stages: Candidate['stage'][] = ['applied', 'screening', 'interview', 'assessment', 'offer', 'hired', 'rejected'];

// Generate 1000 candidates
export const mockCandidates: Candidate[] = Array.from({ length: 1000 }, (_, index) => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${firstName} ${lastName}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`;
  const jobId = mockJobs[Math.floor(Math.random() * mockJobs.length)].id;
  const stage = stages[Math.floor(Math.random() * stages.length)];
  const candidateSkills = tags.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 8) + 3);
  
  const timeline: TimelineEvent[] = [
    {
      id: `timeline-${index}-1`,
      type: 'stage_change',
      description: 'Application submitted',
      toStage: 'applied',
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      author: name
    }
  ];

  // Add some random timeline events
  if (stage !== 'applied') {
    timeline.push({
      id: `timeline-${index}-2`,
      type: 'stage_change',  
      description: `Moved to ${stage}`,
      fromStage: 'applied',
      toStage: stage,
      createdAt: new Date(Date.now() - Math.random() * 20 * 24 * 60 * 60 * 1000).toISOString(),
      author: 'HR Manager'
    });
  }

  return {
    id: `candidate-${index + 1}`,
    name,
    email,
    phone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    stage,
    jobId,
    experience: Math.floor(Math.random() * 15) + 1,
    skills: candidateSkills,
    notes: [],
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    timeline
  };
});

// Mention suggestions for notes
export const mentionSuggestions = [
  { id: '1', name: 'HR Manager', email: 'hr@talentflow.com' },
  { id: '2', name: 'Engineering Manager', email: 'eng@talentflow.com' },
  { id: '3', name: 'Product Manager', email: 'pm@talentflow.com' },
  { id: '4', name: 'Design Lead', email: 'design@talentflow.com' },
  { id: '5', name: 'CTO', email: 'cto@talentflow.com' }
];