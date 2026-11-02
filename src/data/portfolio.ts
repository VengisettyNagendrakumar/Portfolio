import { Education, Experience, Project, Skill, Certificate, Social } from '@/types';

export const personalInfo = {
  name: "Nagendrakumar Vengisetty",
  email: "nagendravengisetti@gmail.com",
  phone: "+91 8520840010",
  location: "Hyderabad",
  title: "AI/ML Developer",
  bio: "AI/ML Developer with hands-on experience building production-grade AI systems including real-time multi-model proctoring pipelines, LLM-based evaluation systems, NLP extraction pipelines, and recommendation engines using computer vision, transformer embeddings, vector search, and speech/entity recognition. Skilled in end-to-end delivery across Python, FastAPI, Celery, and REST API development, with a track record of measurably improving accuracy, efficiency, and scalability across systems deployed to 100,000+ users."
};

export const resumeUrl = "https://drive.google.com/file/d/1p2m1eedSBH_2X-NVFNHYtDPzHhOb_qi-/view?usp=sharing";

export const educationData: Education[] = [
  {
    institution: "Godavari Institute of Engineering and Technology",
    degree: "B.Tech",
    field: "CSE (AIML)",
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
    role: "AI/ML Developer",
    company: "Altrodav Technologies Pvt Ltd",
    period: "Apr 2025 - Present",
    location: "Bangalore, India",
    projects: [
      {
        title: "AI Proctoring & Evaluation Systems",
        technologies: ["FastAPI", "Celery", "Redis", "PostgreSQL", "Python", "InsightFace", "YOLOv8", "Silero VAD", "Resemblyzer"],
        description: [
          "Built and hardened a real-time AI proctoring system for large-scale technical assessments, integrating multi-model inference (InsightFace for face recognition, YOLOv8 for object detection, Silero VAD and Resemblyzer for voice activity/speaker detection) across a FastAPI + Celery + Redis pipeline.",
          "Resolved critical production issues including SSE race conditions, silent YOLO crashes, missing Celery queue registrations, and migrated inference models from CPU to GPU for improved throughput.",
          "Engineered an AI coding evaluation system combining static analysis (Tree-sitter, Semgrep) with LLM-based evaluation (Qwen 2.5 7B), splitting Celery workers by workload type and setting scoring weights to prioritize runtime correctness (60/20/20), improving evaluation accuracy and system reliability to 93%.",
          "Delivered a JD Skill Extractor pipeline (GLiNER, Aho-Corasick, Qwen2.5:7b fallback) for automated job description parsing, improving extraction accuracy from 72% to 87% through ratio-based LLM triggering, an expanded blacklist (~278 phrases), and a 216-trigger implication graph.",
          "Developed a Domain Level Prediction system for technical interview questions, fixing model and dataset issues (524 duplicate entries, sparse difficulty bands) and generating synthetic data for underrepresented bands, achieving 94.2% domain accuracy and Cohen's Kappa of 0.94."
        ]
      },
      {
        title: "AI Recommendation & Onboarding Systems",
        technologies: ["Python", "FastAPI", "Transformer Embeddings", "Amazon Nova Sonic", "BERT NER", "Vector Search"],
        description: [
          "Designed an AI-powered chat reply recommendation system that generates context-aware responses, improving reply relevance and conversational accuracy by 35–40%.",
          "Implemented semantic similarity using Transformer-based embeddings and vector search to retrieve top replies from 100K+ chat pairs, achieving 90%+ semantic match accuracy.",
          "Architected a multi-layer recommendation pipeline combining personal history, friend-specific context, and global fallback, reducing cold-start failures by 30%.",
          "Enhanced response quality by applying toxicity filtering, spam detection, and similarity-based deduplication, reducing unsafe or repetitive replies by 25%.",
          "Created an AI-powered user onboarding assistant that enables users to complete their profiles through voice-based conversations, improving onboarding efficiency by 40%.",
          "Integrated Amazon Nova Sonic for high-speed intent matching and BERT NER for accurate entity extraction (e.g., name, DOB, bio) from user responses, achieving 95% entity accuracy.",
          "Automated the profile form-filling process by mapping extracted entities to application fields, eliminating 100% of manual entry steps and ensuring data consistency.",
          "Improved user experience and retention by reducing onboarding drop-offs by 25% through a seamless conversational interface."
        ]
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "Full Stack e-Commerce Application",
    description: "A responsive e-Commerce platform built with React.js and Django, supporting 100+ products and 50+ active users in its initial phase.",
    technologies: ["React.js", "Django", "Django REST Framework", "React Bootstrap", "RESTful APIs"],
    points: [
      "Developed a responsive e-Commerce platform using React.js and Django, supporting 100+ products and 50+ active users in the initial phase.",
      "Architected and implemented RESTful APIs using Django REST Framework (DRF), enabling seamless data flow between the frontend and backend with latency reduced by 15% and improving API response times by 20%.",
      "Crafted a responsive mobile interface using React Bootstrap, achieving seamless compatibility for over 100 product listings and ensuring optimal user engagement across both desktop and mobile platforms throughout the initial launch phase.",
      "Optimized application scalability and maintainability by adhering to best practices, improving performance by 15%."
    ]
  },
  {
    title: "Employee Management System (React.js + Spring Boot)",
    description: "A full-stack employee management system for managing 50+ employee records.",
    technologies: ["React.js", "Spring Boot", "REST APIs"],
    points: [
      "Built a full-stack employee management system using React.js and Spring Boot for managing 50+ employee records.",
      "Added CRUD features to create, view, update, and delete records with real-time updates, reducing delay by 40%.",
      "Connected frontend and backend using REST APIs, improving data transfer speed by 30%.",
      "Designed a responsive interface with form checks and live table updates, reducing user input errors by 25%."
    ]
  },
  {
    title: "IMDB Clone: Movie Review and Streaming Platform",
    description: "An IMDB-inspired Django platform with a movie database and user-generated reviews.",
    technologies: ["Django", "Token-based Authentication", "Throttling", "Pagination", "Filtering"],
    points: [
      "Created an IMDB-inspired platform with Django, supporting a movie database with 100+ titles and user-generated reviews.",
      "Strengthened security with token-based authentication, reducing unauthorized access by 80%.",
      "Optimized performance by implementing throttling, pagination, and filtering, increasing page load speed by 50%.",
      "Restricted review editing permissions to review owners, ensuring 100% data integrity and user privacy."
    ]
  },
  {
    title: "Deep Learning Based Breast Cancer Classification System",
    description: "A team project using transfer learning to classify breast cancer as benign, malignant, or normal.",
    technologies: ["Deep Learning", "Transfer Learning", "DenseNet121"],
    points: [
      "As a fourth-year project, participated in a team of four to develop an innovative system for breast cancer classification.",
      "Incorporated transfer learning with a pre-trained DenseNet121 model for feature extraction.",
      "Trained a model to categorize breast cancer as benign, malignant, or normal, achieving 98% accuracy."
    ]
  }
];

export const skillsData: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java"]
  },
  {
    category: "AI/ML & Data Science",
    items: ["Machine Learning", "Deep Learning", "Neural Networks", "Natural Language Processing (NLP)"]
  },
  {
    category: "Generative AI",
    items: ["LLMs", "RAG", "Prompt Engineering", "LangChain", "LangGraph", "MCP", "Vector Search", "vLLM", "Ollama"]
  },
  {
    category: "AI/ML Frameworks & Tools",
    items: ["LLM Evaluation"]
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Django", "Django REST Framework", "Spring Boot", "REST API Design"]
  },
  {
    category: "Task Queues & Async Processing",
    items: ["Celery", "Redis"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"]
  },
  {
    category: "Tools",
    items: ["Docker", "Git"]
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS"]
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
