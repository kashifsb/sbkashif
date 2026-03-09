export const personalInfo = {
  name: "Shaik Baleeghuddin Kashif",
  shortName: "S.B. Kashif",
  title: "Technology Specialist",
  tagline: "Infrastructure Automation · Monitoring Systems · Operational Tooling",
  description:
    "Technology Specialist at D. E. Shaw India, building infrastructure automation, monitoring systems, and operational tooling that support large-scale production environments. Skilled in Go and Python with hands-on experience in Linux systems, incident response, and DevOps practices.",
  email: "baleeghuddin.kashif@gmail.com",
  secondaryEmail: "hello@sbkashif.com",
  phone: "+919032819156",
  location: "Hyderabad, India",
  github: "https://github.com/kashifsb",
  linkedin: "https://www.linkedin.com/in/baleegh-ud-din/",
  twitter: "https://x.com/baleeghuddin",
  website: "https://sbkashif.com",
  resumeUrl: "/resume",
};

export const about = {
  summary: [
    "I'm Shaik Baleeghuddin Kashif, a Technology Specialist at D. E. Shaw India Private Limited (via Xpheno), focusing on infrastructure automation, monitoring systems, and operational tooling. I build alerting platforms, dashboards, and internal services that support large-scale production infrastructure.",
    "I graduated from B. V. Raju Institute of Technology with a B.Tech in Electronics and Communication Engineering. During my undergraduate years, I worked on autonomous systems — object detection using LiDAR for self-driving cars, traffic light recognition, and smart home automation using IoT. I'm also a published IEEE researcher.",
    "My current work spans Go and Python-based automation, custom alerting and monitoring systems, RESTful APIs, incident response, and Linux system operations. I'm passionate about reducing toil, improving system reliability, and building tools that make engineering teams more productive.",
  ],
  highlights: [
    { label: "Focus", value: "Infrastructure & Automation" },
    { label: "Stack", value: "Go · Rust · Python · Linux" },
    { label: "Philosophy", value: "Automate Everything" },
    { label: "Approach", value: "Reliability First" },
  ],
};

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  grade: string;
  thesis?: string;
  highlights: string[];
  website?: string;
}

export const education: Education[] = [
  {
    institution: "B. V. Raju Institute of Technology (BVRIT)",
    degree: "Bachelor of Technology",
    field: "Electronics and Communication Engineering",
    location: "Narsapur, Medak, Telangana, India",
    period: "Aug 2019 — May 2023",
    grade: "7.3 / 10",
    thesis:
      "LiDAR-Based Object Detection for Autonomous Vehicles Using Calibrated Camera and LiDAR Sensor Data",
    highlights: [
      "Core coursework in Electronics, Communication Systems, Embedded Systems, Signal Processing, and Computer Networks",
      "Worked extensively in Embedded Systems Design Laboratory — hardware-software integrated projects using sensors, microcontrollers, and communication protocols",
      "Applied machine learning and deep learning techniques to process camera and LiDAR sensor data for autonomous vehicle perception",
      "Developed object detection and recognition systems using ROS, calibrated camera-LiDAR setups, and modern perception algorithms",
      "IEEE conference publication on object detection using calibrated camera and LiDAR sensor data",
      "Hands-on experience in web development with React, Node.js, databases, and REST APIs",
    ],
    website: "https://bvrit.ac.in/",
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  via?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "D. E. Shaw India Private Limited",
    role: "Technology Specialist",
    period: "Jul 2023 — Present",
    location: "Hyderabad, India",
    via: "Xpheno Private Limited",
    description:
      "Building infrastructure automation, monitoring systems, and operational tooling for large-scale production environments.",
    highlights: [
      "Designed, developed, and maintained automation workflows using Go and Python to streamline alert handling and reduce manual operational effort during incidents",
      "Built and enhanced custom alerting and monitoring systems to improve infrastructure reliability, observability, and incident response across global operations",
      "Developed and maintained internal RESTful APIs supporting monitoring and alerting platforms, ensuring modular, maintainable, and scalable systems",
      "Created a vendor management and analytics application to track sites, vendors, network circuits, maintenance activities, and outages with real-time operational insights",
      "Designed and implemented operational dashboards and reports for monthly and quarterly performance metrics for leadership and stakeholders",
      "Automated incident and alert assignment workflows, ensuring faster routing to relevant teams and reducing response times",
      "Leveraged large language models (LLMs) to summarize incident tickets and vendor communications, improving team productivity",
      "Contributed to migration of legacy monitoring dashboards to a modern technology stack with modular frontend components",
      "Actively participated in incident response, Linux system troubleshooting, and network issue resolution across distributed infrastructure",
    ],
    technologies: [
      "Go",
      "Python",
      "React",
      "Linux",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "REST API",
      "CI/CD",
    ],
  },
  {
    company: "TIHAN, IIT Hyderabad",
    role: "Research Intern",
    period: "Oct 2022 — Jan 2023",
    location: "Hyderabad, India",
    description:
      "Worked on autonomous vehicle systems including GPS-based navigation, sensor fusion, and perception modules for self-driving vehicles.",
    highlights: [
      "Implemented a GPS-based navigation system for autonomous vehicles, enabling accurate localization and route guidance in real-world environments",
      "Designed and developed electronic sensor systems, integrating data from multiple sensors to support autonomous vehicle perception and decision-making",
      "Worked on sensor fusion techniques to combine GPS, camera, and other sensor inputs for improved reliability and accuracy",
      "Developed a traffic light detection and recognition system using camera data for perception modules",
      "Built a software application for vehicle-user communication, enabling command input, status monitoring, and interaction with the autonomous system",
      "Assisted in testing, validation, and performance analysis of autonomous navigation and perception components",
    ],
    technologies: [
      "Python",
      "ROS",
      "OpenCV",
      "TensorFlow",
      "LiDAR",
      "GPS",
      "Sensor Fusion",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  date?: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: "Nurix",
    description:
      "CLI tool that manages Caddy reverse proxy records through PostgreSQL as a single source of truth. Domains and DNS records are registered via commands, and the Caddyfile is automatically generated and reloaded. Features secure OS keyring credential storage, full audit trail via changelog, expiry enforcement, and cross-platform support.",
    technologies: ["Go", "PostgreSQL", "Caddy", "Cobra CLI", "OS Keyring"],
    date: "Feb 2026",
    github: "https://github.com/kashifsb/nurix",
  },
  {
    name: "Object Detection using LiDAR for Self-Driving Cars",
    description:
      "Utilized Robot Operating System (ROS) to process LiDAR sensor data for object detection in self-driving cars. Implemented sensor fusion techniques and the PointPillars method, trained on the KITTI dataset for real-world performance.",
    technologies: ["Python", "ROS", "LiDAR", "PointPillars", "KITTI"],
    date: "Feb 2023",
  },
  {
    name: "Traffic Light Detection & Recognition",
    description:
      "Traffic light detection and recognition system for self-driving cars using OpenCV, TensorFlow, and PyTorch. Employed YOLO v3 algorithm trained on the LISA dataset for high accuracy in real-world driving scenarios.",
    technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "YOLOv3"],
    date: "Oct 2022",
  },
  {
    name: "Smart Home Automation using IoT",
    description:
      "Wireless communication system allowing remote control of home appliances via mobile devices. Integrated IoT sensors to automate appliance control based on real-time environment data, achieving a 20% reduction in energy consumption.",
    technologies: ["IoT", "Sensors", "Microcontrollers", "Mobile"],
    date: "Oct 2021",
  },
  {
    name: "sbkashif.com",
    description:
      "This portfolio website. Built with React, TypeScript, Tailwind CSS, and a Go backend. Features a modern dark UI with smooth animations and optimized static serving.",
    technologies: ["React", "TypeScript", "Go", "Tailwind CSS", "Vite"],
    date: "Mar 2026",
    github: "https://github.com/kashifsb/sbkashif",
  },
];

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Go" },
      { name: "Rust" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Node.js" },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    skills: [
      { name: "Linux Administration" },
      { name: "Incident Response" },
      { name: "Production Operations" },
      { name: "CI/CD" },
      { name: "Monitoring & Alerting" },
      { name: "Infrastructure Automation" },
      { name: "Networking (TCP/IP, DNS)" },
    ],
  },
  {
    category: "Cloud & Containers",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Podman" },
      { name: "GCP" },
      { name: "Azure" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQL Server" },
      { name: "ClickHouse" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "REST API" },
      { name: "gRPC" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Terraform" },
      { name: "Ansible" },
      { name: "Puppet" },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Ubuntu" },
      { name: "RHEL" },
      { name: "Windows" },
    ],
  },
];

export interface Publication {
  title: string;
  venue: string;
  year: string;
  doi?: string;
  url?: string;
  description: string;
}

export const publications: Publication[] = [
  {
    title:
      "Object Detection System in Self-Driving Cars by Calibrated Camera and LiDAR Sensor data – Implementation of the Hybrid PointPillar Method",
    venue:
      "2023 IEEE International Congress on Human-Computer Interaction, Optimization, and Robotic Applications (HORA)",
    year: "2023",
    doi: "10.1109/HORA58378.2023.10155780",
    url: "https://ieeexplore.ieee.org/document/10155780",
    description:
      "Presents a hybrid approach using LiDAR and calibrated camera sensor data for object detection in self-driving cars. The study emphasizes the use of the PointPillar algorithm to enhance detection accuracy and provides insights into optimizing autonomous vehicle sensing systems.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];
