
import { Education, Experience, Project, Skill, Certificate, Social } from '@/types';

export const personalInfo = {
  name: "Nagendrakumar Vengisetty",
  email: "nagendravengisetti@gmail.com",
  phone: "+91 8520840010",
  location: "Hyderabad",
  title: "Full Stack Developer",
  bio: "Full Stack Developer with expertise in frontend, backend, and database management. Experienced in creating scalable and high-performance web applications using React.js, Django, and related technologies."
};

export const educationData: Education[] = [
  {
    institution: "Godavari Institute of Engineering and Technology",
    degree: "B.Tech",
    field: "CSE(AIML)",
    cgpa: "8.42",
    period: "2020 - 2024",
    location: "Rajahmundry"
  },
  {
    institution: "Sri Vagdevi Junior College",
    degree: "Intermediate, MPC",
    percentage: "91%",
    period: "2018 - 2020",
    location: "Kodad"
  }
];

export const experienceData: Experience[] = [
  {
    role: "Full-Stack Intern",
    company: "Techwing",
    period: "Dec 2023 - Mar 2024",
    description: [
      "Utilized expertise in frontend, backend, and database management to create scalable and high-performance web applications.",
      "Participated in daily stand-ups and contributed to project planning sessions."
    ],
    technologies: ["Python", "Django", "React.js"]
  },
  {
    role: "AI/ML Intern",
    company: "Edu Skills",
    period: "Dec 2022 - Feb 2023",
    description: [
      "Leveled up AI development skills to advance career.",
      "Learned fundamental algorithms and concepts in AI and machine learning."
    ],
    technologies: ["AI", "ML"]
  }
];

export const projectsData: Project[] = [
  {
    title: "Full Stack e-Commerce Application",
    period: "June 2024 - Aug 2024",
    description: "A responsive e-Commerce platform using React.js and Django",
    technologies: ["React.js", "Django", "Django REST Framework", "RESTful APIs"],
    link: "django-backend-mp34.onrender.com/#/",
    points: [
      "Engineered a responsive e-Commerce platform using React.js and Django, supporting 100+ products and 50+ active users in the initial phase.",
      "Designed and implemented RESTful APIs using Django REST Framework (DRF), enabling seamless data flow between the frontend and backend with latency reduced by 15% and improving API response times by 20%.",
      "Developed a responsive mobile interface using React Bootstrap, achieving seamless compatibility for over 100 product listings and ensuring optimal user engagement across both desktop and mobile platforms throughout initial launch phase.",
      "Optimized application scalability and maintainability by adhering to best practices, improving performance by 15%."
    ]
  },
  {
    title: "Deep Learning Based Breast Cancer Classification System",
    period: "Nov 2023 - Mar 2024",
    description: "An innovative system for breast cancer classification",
    technologies: ["Deep Learning", "Transfer Learning", "DenseNet121"],
    points: [
      "As a fourth-year project, participated in a team of four to develop an innovative system for breast cancer classification.",
      "Incorporated transfer learning with a pre-trained DenseNet121 model for feature extraction.",
      "Engineered a model to categorize breast cancer as benign, malignant, or normal, achieving an exceptional 98% accuracy."
    ]
  },
  {
    title: "IMDB Clone: Movie Review and Streaming Platform",
    period: "Sep 2023 - Oct 2023",
    description: "An IMDB-inspired platform with Django",
    technologies: ["Django", "Token-based Authentication", "Pagination", "Filtering"],
    points: [
      "Developed an IMDB-inspired platform with Django, supporting a movie database with 100+ titles and user-generated reviews.",
      "Enhanced security with token-based authentication, reducing unauthorized access by 80%.",
      "Optimized performance by implementing throttling, pagination, and filtering, increasing page load speed by 50%.",
      "Restricted review editing permissions to review owners, ensuring 100% data integrity and user privacy."
    ]
  }
];

export const skillsData: Skill[] = [
  {
    category: "Technical Skills",
    items: ["HTML", "CSS", "React.js", "Python", "Django", "Django REST Framework", "Java", "Spring Boot", "MySQL"]
  },
  {
    category: "Tools",
    items: ["Postman", "MySQL Workbench", "Figma"]
  }
];

export const certificatesData: Certificate[] = [
  {
    name: "Python",
    issuer: "Microsoft"
  },
  {
    name: "Java Basic",
    issuer: "HackerRank"
  },
  {
    name: "Coding",
    issuer: "Accenture"
  }
];

export const socialData: Social[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/nagendra-kumar-vengisetty-253079253/",
    username: "nagendra-kumar-vengisetty-253079253"
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/nagendravengisetti",
    username: "nagendravengisetti"
  },
  {
    platform: "GitHub",
    url: "https://github.com/VengisettyNagendrakumar",
    username: "Vengisetty Nagendrakumar"
  }
];
