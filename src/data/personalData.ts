import { PersonalInfo, Project, Skill, ContactInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Gustav James",
  title: "Java Developer & Security Researcher",
  subtitle: "Java Developer | Cybersecurity Specialist | Cryptography Expert | AI Model Trainer",
  description: "I'm a Java developer specializing in cybersecurity, cryptography, and AI model training. I build secure applications, develop cryptographic solutions, and train machine learning models using Java and related technologies.",
  about: "I'm a Java developer and cybersecurity researcher focused on building secure applications and cryptographic solutions. I work on developing Java-based security tools, implementing cryptographic protocols, and training AI models for threat detection. My expertise spans Java development, penetration testing, cryptographic algorithm design, and machine learning model development.",
  image: "/IMG_2391.jpeg",
  stats: {
    projects: 25,
    experience: "3+ years",
    satisfaction: 100
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Security Model",
    description: "A machine learning model for detecting cybersecurity threats and anomalies in network traffic. Trained on large datasets of attack patterns.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "Cryptographic Protocol",
    description: "A custom cryptographic protocol implementation for secure communication. Features advanced encryption and key exchange mechanisms.",
    technologies: ["Python", "OpenSSL", "Cryptography", "RSA", "AES", "SHA-256"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Penetration Testing Framework",
    description: "An automated penetration testing framework built with Python. Automates vulnerability scanning and security assessment processes.",
    technologies: ["Python", "Kali Linux", "Metasploit", "Nmap", "Wireshark", "Scapy"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const skills: Skill[] = [
  // Java Development
  { name: "Java", level: 98, category: "java" },
  { name: "Spring Framework", level: 95, category: "java" },
  { name: "Spring Boot", level: 95, category: "java" },
  { name: "Maven/Gradle", level: 90, category: "java" },
  { name: "JUnit Testing", level: 88, category: "java" },
  { name: "Hibernate/JPA", level: 85, category: "java" },
  
  // Cybersecurity
  { name: "Penetration Testing", level: 95, category: "cybersecurity" },
  { name: "Network Security", level: 90, category: "cybersecurity" },
  { name: "Kali Linux", level: 95, category: "cybersecurity" },
  { name: "Wireshark", level: 85, category: "cybersecurity" },
  { name: "Metasploit", level: 90, category: "cybersecurity" },
  { name: "Nmap", level: 88, category: "cybersecurity" },
  
  // Cryptography
  { name: "Cryptographic Algorithms", level: 92, category: "cryptography" },
  { name: "RSA/AES Encryption", level: 90, category: "cryptography" },
  { name: "Hash Functions", level: 88, category: "cryptography" },
  { name: "Digital Signatures", level: 85, category: "cryptography" },
  { name: "PKI Systems", level: 87, category: "cryptography" },
  { name: "Blockchain Security", level: 80, category: "cryptography" }
];

export const contactInfo: ContactInfo = {
  email: "gustavjames382@gmail.com",
  phone: "+1 825-963-1088",
  location: "Edmonton, Canada",
  social: {
    github: "https://github.com/Gustavjames",
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  }
};
