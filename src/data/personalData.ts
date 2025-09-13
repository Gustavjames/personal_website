import { PersonalInfo, Project, Skill, ContactInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Gustav James",
  title: "Full Stack Developer",
  subtitle: "Full Stack Developer | Cybersecurity Specialist | Network Engineer",
  description: "I specialize in creating secure, efficient digital solutions and transforming innovative ideas into reality. Passionate about learning new technologies and pursuing code elegance and perfect user experience.",
  about: "I am a passionate full-stack developer with expertise in cybersecurity and network engineering. I love creating secure, efficient digital products while always focusing on user experience. My skills span frontend development (React.js, TypeScript), backend development (Node.js), cybersecurity (Kali Linux), and network administration. I enjoy the process of learning new technologies and am eager to turn innovative ideas into reality.",
  stats: {
    projects: 25,
    experience: "3+ years",
    satisfaction: 100
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Secure Dating App",
    description: "A privacy-focused dating application with advanced safety features, real-time verification, and secure communication protocols. Currently in development with emphasis on user safety and data protection.",
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "JWT", "Encryption"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "Network Security Tool",
    description: "A comprehensive network security monitoring tool built with Kali Linux tools and Node.js, providing real-time threat detection and analysis.",
    technologies: ["Kali Linux", "Node.js", "Python", "Wireshark"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Cybersecurity Dashboard",
    description: "A powerful cybersecurity dashboard providing real-time security monitoring, vulnerability assessment, and incident response capabilities.",
    technologies: ["React.js", "Node.js", "Kali Linux", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "CSS3/SASS", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 95, category: "backend" },
  { name: "Express.js", level: 90, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  
  // Cybersecurity & Network
  { name: "Kali Linux", level: 95, category: "tools" },
  { name: "Network Security", level: 90, category: "tools" },
  { name: "Penetration Testing", level: 85, category: "tools" },
  { name: "Wireshark", level: 80, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Git", level: 90, category: "tools" }
];

export const contactInfo: ContactInfo = {
  email: "gustav.james@example.com",
  phone: "+1 825-963-1088",
  location: "Edmonton, Canada",
  social: {
    github: "https://github.com/Gustavjames",
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  }
};
