export interface Question {
  id: string;
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  points: number;
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  jobId?: string;
  duration: number; // in minutes
  passingScore: number; // percentage
  questions: Question[];
  createdAt: string;
  updatedAt: string;
}

// Hardcoded 5 assessments with 12 MCQ each
export const mockAssessments: Assessment[] = [
  {
    id: "assessment-1",
    title: "Frontend Development Assessment",
    description: "Comprehensive test for React, JavaScript, and CSS fundamentals",
    duration: 60,
    passingScore: 70,
    questions: [
      {
        id: "q1-1",
        type: "multiple-choice",
        question: "What is the correct way to create a functional component in React?",
        options: [
          "function MyComponent() { return <div>Hello</div>; }",
          "const MyComponent = () => { return <div>Hello</div>; }",
          "class MyComponent extends Component { render() { return <div>Hello</div>; } }",
          "Both A and B are correct"
        ],
        correctAnswer: 3,
        points: 10
      },
      {
        id: "q1-2",
        type: "multiple-choice",
        question: "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q1-3",
        type: "multiple-choice",
        question: "What does CSS flexbox 'justify-content: space-between' do?",
        options: [
          "Centers items horizontally",
          "Distributes items evenly with space around them",
          "Distributes items with space between them, no space at edges",
          "Aligns items to the right"
        ],
        correctAnswer: 2,
        points: 10
      },
      {
        id: "q1-4",
        type: "multiple-choice",
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        options: ["append()", "push()", "add()", "insert()"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q1-5",
        type: "multiple-choice",
        question: "What is the purpose of the useEffect hook?",
        options: [
          "To manage component state",
          "To perform side effects in functional components",
          "To optimize component rendering",
          "To handle user input"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q1-6",
        type: "multiple-choice",
        question: "How do you pass data from parent to child component in React?",
        options: ["Through state", "Through props", "Through context", "Through refs"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q1-7",
        type: "multiple-choice",
        question: "Which CSS property is used to make text bold?",
        options: ["text-weight", "font-weight", "font-bold", "text-bold"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q1-8",
        type: "multiple-choice",
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: [
          "No difference",
          "=== is faster than ==",
          "=== compares type and value, == only compares value",
          "== is deprecated"
        ],
        correctAnswer: 2,
        points: 10
      },
      {
        id: "q1-9",
        type: "multiple-choice",
        question: "Which HTML tag is used for the most important heading?",
        options: ["<heading>", "<h1>", "<head>", "<title>"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q1-10",
        type: "multiple-choice",
        question: "What is the virtual DOM in React?",
        options: [
          "A copy of the real DOM in memory",
          "A new version of HTML",
          "A React library",
          "A browser feature"
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: "q1-11",
        type: "multiple-choice",
        question: "How do you center a div horizontally and vertically using CSS Grid?",
        options: [
          "place-items: center",
          "justify-content: center; align-items: center",
          "grid-center: true",
          "center: both"
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: "q1-12",
        type: "multiple-choice",
        question: "What is the purpose of React keys in lists?",
        options: [
          "To encrypt data",
          "To help React identify which items have changed",
          "To sort the list",
          "To style the items"
        ],
        correctAnswer: 1,
        points: 10
      }
    ],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "assessment-2",
    title: "Backend Development Assessment",
    description: "Test covering Node.js, databases, and API design principles",
    duration: 75,
    passingScore: 65,
    questions: [
      {
        id: "q2-1",
        type: "multiple-choice",
        question: "What is REST API?",
        options: [
          "A database query language",
          "An architectural style for web services",
          "A JavaScript framework",
          "A type of server"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q2-2",
        type: "multiple-choice",
        question: "Which HTTP method is used to update a resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 2,
        points: 10
      },
      {
        id: "q2-3",
        type: "multiple-choice",
        question: "What is the purpose of middleware in Express.js?",
        options: [
          "To handle database connections",
          "To process requests before they reach route handlers",
          "To render HTML templates",
          "To manage user sessions"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q2-4",
        type: "multiple-choice",
        question: "What does SQL stand for?",
        options: [
          "Simple Query Language",
          "Structured Query Language", 
          "Standard Query Language",
          "Sequential Query Language"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q2-5",
        type: "multiple-choice",
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        correctAnswer: 2,
        points: 10
      },
      {
        id: "q2-6",
        type: "multiple-choice",
        question: "What is the purpose of JWT (JSON Web Tokens)?",
        options: [
          "To format JSON data",
          "To authenticate and authorize users",
          "To compress data",
          "To validate forms"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q2-7",
        type: "multiple-choice",
        question: "Which Node.js module is used for file system operations?",
        options: ["http", "fs", "path", "url"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q2-8",
        type: "multiple-choice",
        question: "What is the difference between SQL JOIN types?",
        options: [
          "No difference, all JOINs are the same",
          "INNER JOIN returns only matching records, LEFT JOIN returns all from left table",
          "LEFT JOIN is faster than INNER JOIN",
          "JOINs are only used for performance"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q2-9",
        type: "multiple-choice",
        question: "What is the purpose of indexing in databases?",
        options: [
          "To backup data",
          "To improve query performance",
          "To encrypt data",
          "To validate data types"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q2-10",
        type: "multiple-choice",
        question: "Which HTTP status code indicates 'Not Found'?",
        options: ["200", "404", "500", "401"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q2-11",
        type: "multiple-choice",
        question: "What is CORS in web development?",
        options: [
          "A database backup method",
          "Cross-Origin Resource Sharing policy",
          "A JavaScript framework",
          "A server configuration tool"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q2-12",
        type: "multiple-choice",
        question: "What is the purpose of environment variables?",
        options: [
          "To store application configuration",
          "To improve performance",
          "To handle user input",
          "To manage database schemas"
        ],
        correctAnswer: 0,
        points: 10
      }
    ],
    createdAt: "2024-01-16T11:00:00Z",
    updatedAt: "2024-01-16T11:00:00Z"
  },
  {
    id: "assessment-3",
    title: "Data Science & Analytics Assessment",
    description: "Evaluation of statistics, Python, and machine learning concepts",
    duration: 90,
    passingScore: 75,
    questions: [
      {
        id: "q3-1",
        type: "multiple-choice",
        question: "What is the difference between supervised and unsupervised learning?",
        options: [
          "Supervised learning uses labeled data, unsupervised doesn't",
          "Unsupervised learning is more accurate",
          "No significant difference",
          "Supervised learning is faster"
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: "q3-2",
        type: "multiple-choice",
        question: "Which Python library is primarily used for data manipulation?",
        options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q3-3",
        type: "multiple-choice",
        question: "What does 'overfitting' mean in machine learning?",
        options: [
          "Model performs too well on training data but poorly on new data",
          "Model is too simple",
          "Model trains too quickly",
          "Model uses too much memory"
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: "q3-4",
        type: "multiple-choice",
        question: "What is the purpose of cross-validation?",
        options: [
          "To clean data",
          "To evaluate model performance on unseen data",
          "To visualize data",
          "To compress datasets"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q3-5",
        type: "multiple-choice",
        question: "Which measure of central tendency is most affected by outliers?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: 0,
        points: 10
      },
      {
        id: "q3-6",
        type: "multiple-choice",
        question: "What is feature engineering?",
        options: [
          "Creating new features from existing data",
          "Removing bad data",
          "Training multiple models",
          "Optimizing algorithms"
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: "q3-7",
        type: "multiple-choice",
        question: "Which algorithm is best for classification problems?",
        options: [
          "Linear Regression",
          "Logistic Regression",
          "K-means",
          "PCA"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q3-8",
        type: "multiple-choice",
        question: "What is the purpose of normalization in data preprocessing?",
        options: [
          "To remove outliers",
          "To scale features to similar ranges",
          "To add more data",
          "To visualize relationships"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q3-9",
        type: "multiple-choice",
        question: "What does R-squared measure in regression analysis?",
        options: [
          "The speed of the algorithm",
          "The proportion of variance explained by the model",
          "The number of features used",
          "The correlation between variables"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q3-10",
        type: "multiple-choice",
        question: "Which technique is used for dimensionality reduction?",
        options: ["Linear Regression", "PCA", "Decision Trees", "K-means"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q3-11",
        type: "multiple-choice",
        question: "What is the purpose of A/B testing?",
        options: [
          "To clean datasets",
          "To compare two versions of something",
          "To train models faster",
          "To visualize data distributions"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q3-12",
        type: "multiple-choice",
        question: "What is the difference between correlation and causation?",
        options: [
          "They are the same thing",
          "Correlation implies causation",
          "Correlation shows relationship, causation shows cause-effect",
          "Causation is weaker than correlation"
        ],
        correctAnswer: 2,
        points: 10
      }
    ],
    createdAt: "2024-01-17T12:00:00Z",
    updatedAt: "2024-01-17T12:00:00Z"
  },
  {
    id: "assessment-4",
    title: "Product Management Assessment",
    description: "Evaluation of product strategy, user research, and agile methodologies",
    duration: 45,
    passingScore: 70,
    questions: [
      {
        id: "q4-1",
        type: "multiple-choice",
        question: "What is the primary goal of user research?",
        options: [
          "To prove product assumptions",
          "To understand user needs and behaviors",
          "To increase development speed",
          "To reduce costs"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q4-2",
        type: "multiple-choice",
        question: "What does MVP stand for in product development?",
        options: [
          "Most Valuable Player",
          "Minimum Viable Product",
          "Maximum Value Proposition",
          "Minimum Value Package"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q4-3",
        type: "multiple-choice",
        question: "Which framework is used to prioritize product features?",
        options: ["SCRUM", "MoSCoW", "Kanban", "Waterfall"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q4-4",
        type: "multiple-choice",
        question: "What is the purpose of user personas?",
        options: [
          "To represent target users",
          "To document technical requirements",
          "To plan development sprints",
          "To measure performance metrics"
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: "q4-5",
        type: "multiple-choice",
        question: "What is a product backlog in Agile development?",
        options: [
          "A list of bugs to fix",
          "A prioritized list of features and requirements",
          "A team performance report",
          "A project timeline"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q4-6",
        type: "multiple-choice",
        question: "What does KPI stand for?",
        options: [
          "Key Product Indicator",
          "Key Performance Indicator",
          "Key Process Improvement",
          "Key Project Information"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q4-7",
        type: "multiple-choice",
        question: "What is the purpose of user story mapping?",
        options: [
          "To visualize user journey and prioritize features",
          "To create technical documentation",
          "To estimate development time",
          "To track team velocity"
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: "q4-8",
        type: "multiple-choice",
        question: "Which metric best measures user engagement?",
        options: [
          "Number of downloads",
          "Daily/Monthly Active Users",
          "Revenue per user",
          "Page load time"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q4-9",
        type: "multiple-choice",
        question: "What is the difference between features and benefits?",
        options: [
          "They are the same",
          "Features are what the product does, benefits are why users care",
          "Benefits are more technical than features",
          "Features are user-focused, benefits are technical"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q4-10",
        type: "multiple-choice",
        question: "What is the purpose of competitive analysis?",
        options: [
          "To copy competitor features",
          "To understand market positioning and opportunities",
          "To criticize competitors",
          "To reduce development costs"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q4-11",
        type: "multiple-choice",
        question: "What is a sprint in Agile development?",
        options: [
          "A quick meeting",
          "A time-boxed iteration of development work",
          "A type of user story",
          "A performance metric"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q4-12",
        type: "multiple-choice",
        question: "What is the goal of product-market fit?",
        options: [
          "To reduce development costs",
          "To find a market that wants your product",
          "To increase team productivity",
          "To simplify user interface"
        ],
        correctAnswer: 1,
        points: 10
      }
    ],
    createdAt: "2024-01-18T13:00:00Z",
    updatedAt: "2024-01-18T13:00:00Z"
  },
  {
    id: "assessment-5",
    title: "DevOps & Cloud Engineering Assessment",
    description: "Test covering containerization, CI/CD, and cloud infrastructure",
    duration: 80,
    passingScore: 65,
    questions: [
      {
        id: "q5-1",
        type: "multiple-choice",
        question: "What is the main benefit of containerization?",
        options: [
          "Faster code compilation",
          "Consistent environments across development and production",
          "Automatic bug fixing",
          "Better user interfaces"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q5-2",
        type: "multiple-choice",
        question: "Which tool is primarily used for container orchestration?",
        options: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q5-3",
        type: "multiple-choice",
        question: "What does CI/CD stand for?",
        options: [
          "Code Integration/Code Deployment",
          "Continuous Integration/Continuous Deployment",
          "Container Infrastructure/Container Delivery",
          "Cloud Integration/Cloud Development"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q5-4",
        type: "multiple-choice",
        question: "What is Infrastructure as Code (IaC)?",
        options: [
          "Writing application code",
          "Managing infrastructure through code and version control",
          "Coding in the cloud",
          "Converting code to infrastructure"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q5-5",
        type: "multiple-choice",
        question: "Which AWS service is used for serverless computing?",
        options: ["EC2", "S3", "Lambda", "RDS"],
        correctAnswer: 2,
        points: 10
      },
      {
        id: "q5-6",
        type: "multiple-choice",
        question: "What is the purpose of monitoring in DevOps?",
        options: [
          "To write better code",
          "To track system performance and detect issues",
          "To manage team schedules",
          "To deploy applications"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q5-7",
        type: "multiple-choice",
        question: "What is a microservice architecture?",
        options: [
          "A single large application",
          "Small, independent services that communicate over APIs",
          "A type of database",
          "A deployment strategy"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q5-8",
        type: "multiple-choice",
        question: "Which tool is commonly used for configuration management?",
        options: ["Git", "Ansible", "Docker", "Kubernetes"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q5-9",
        type: "multiple-choice",
        question: "What is the purpose of load balancing?",
        options: [
          "To store data efficiently",
          "To distribute incoming requests across multiple servers",
          "To backup applications",
          "To monitor system logs"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q5-10",
        type: "multiple-choice",
        question: "What is blue-green deployment?",
        options: [
          "A color coding system",
          "A deployment strategy using two identical environments",
          "A type of server",
          "A monitoring technique"
        ],
        correctAnswer: 1,
        points: 10
      },
      {
        id: "q5-11",
        type: "multiple-choice",
        question: "What is the main purpose of version control in DevOps?",
        options: [
          "To track changes and enable collaboration",
          "To deploy applications",
          "To monitor performance",
          "To manage servers"
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: "q5-12",
        type: "multiple-choice",
        question: "What is auto-scaling in cloud computing?",
        options: [
          "Automatically updating software",
          "Automatically adjusting resources based on demand",
          "Automatically fixing bugs",
          "Automatically backing up data"
        ],
        correctAnswer: 1,
        points: 10
      }
    ],
    createdAt: "2024-01-19T14:00:00Z",
    updatedAt: "2024-01-19T14:00:00Z"
  }
];