import { PersonalInfo, Project, Skill, ContactInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "YourName",
  title: "全栈开发者",
  subtitle: "全栈开发者 | UI/UX设计师 | 创意工程师",
  description: "我专注于创造美观、实用的数字体验，将创意转化为现实。热爱学习新技术，追求代码的优雅和用户体验的完美。",
  about: "我是一名充满激情的全栈开发者，拥有5年的Web开发经验。我热爱创造美观、实用的数字产品，并始终关注用户体验。我的技能涵盖前端开发（React, Vue.js, TypeScript）、后端开发（Node.js, Python, Go）以及云服务部署。我享受学习新技术的过程，并乐于将创新想法转化为现实。",
  stats: {
    projects: 50,
    experience: "5年+",
    satisfaction: 100
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "电商平台",
    description: "一个现代化的电商平台，使用React和Node.js构建，包含完整的购物车、支付和用户管理功能。",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "任务管理应用",
    description: "一个直观的任务管理工具，支持团队协作、实时更新和进度跟踪。",
    technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "数据分析仪表板",
    description: "一个强大的数据分析平台，提供实时数据可视化和交互式图表。",
    technologies: ["D3.js", "Python", "Flask", "Redis"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "Vue.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "CSS3/SASS", level: 95, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "Go", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "Redis", level: 70, category: "backend" },
  
  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Vercel", level: 80, category: "tools" }
];

export const contactInfo: ContactInfo = {
  email: "your.email@example.com",
  phone: "+86 138 0000 0000",
  location: "中国，北京",
  social: {
    github: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  }
};
