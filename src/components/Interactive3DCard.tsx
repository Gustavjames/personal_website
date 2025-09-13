'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Database, Shield, Zap, Terminal, Lock } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  tech: string[];
  status: string;
  index: number;
}

const Interactive3DCard = ({ title, description, icon, gradient, tech, status, index }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-80 perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {/* Main Card */}
        <motion.div
          className={`relative w-full h-full glass rounded-2xl overflow-hidden hacker-glow cursor-pointer ${
            isHovered ? 'shadow-2xl' : 'shadow-lg'
          }`}
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 ${gradient} opacity-20`} />
          
          {/* Matrix Background Effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center hacker-glow"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-black terminal-text font-bold">[G]</span>
              </motion.div>
              <div className="text-right">
                <div className="text-xs text-green-400 terminal-text mb-1">
                  &gt; STATUS
                </div>
                <div className={`text-sm font-bold terminal-text ${
                  status === 'IN_DEVELOPMENT' ? 'text-yellow-400' : 
                  status === 'ACTIVE' ? 'text-green-400' : 'text-green-300'
                }`}>
                  {status}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-green-400 terminal-text mb-3">
              {title}
            </h3>

            {/* Description */}
            <p className="text-green-300 text-sm leading-relaxed flex-1 terminal-text">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="mt-4">
              <div className="text-xs text-green-400 terminal-text mb-2">
                &gt; TECH_STACK
              </div>
              <div className="flex flex-wrap gap-1">
                {tech.slice(0, 3).map((item, idx) => (
                  <motion.span
                    key={idx}
                    className="px-2 py-1 bg-green-900/50 text-green-400 text-xs rounded border border-green-600 terminal-text"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item}
                  </motion.span>
                ))}
                {tech.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-600 terminal-text">
                    +{tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-cyan-400/10 opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle at ${isHovered ? '50%' : '0%'} 50%, rgba(0, 255, 0, 0.1) 0%, transparent 50%)`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* 3D Shadow */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-black/20"
          style={{
            transform: "translateZ(-75px)",
            filter: "blur(20px)",
          }}
          animate={{
            opacity: isHovered ? 0.8 : 0.4,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Interactive3DCardGrid = () => {
  const cards = [
    {
      title: "Secure Dating App",
      description: "A privacy-focused dating application with advanced safety features, real-time verification, and secure communication protocols.",
      icon: null,
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "JWT", "Encryption"],
      status: "IN_DEVELOPMENT"
    },
    {
      title: "Network Security Tool",
      description: "Advanced network monitoring and security analysis tool with real-time threat detection and automated response systems.",
      icon: null,
      gradient: "bg-gradient-to-br from-green-700 to-green-900",
      tech: ["Python", "Kali Linux", "Wireshark", "Docker", "Redis"],
      status: "ACTIVE"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Comprehensive security monitoring dashboard with threat intelligence, vulnerability assessment, and incident response tools.",
      icon: null,
      gradient: "bg-gradient-to-br from-green-800 to-black",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL", "Redis"],
      status: "DEPLOYED"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <Interactive3DCard
          key={index}
          {...card}
          index={index}
        />
      ))}
    </div>
  );
};

export default Interactive3DCardGrid;
