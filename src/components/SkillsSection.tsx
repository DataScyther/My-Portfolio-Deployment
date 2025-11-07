import React, { useEffect } from "react";
import GradientText from "./GradientText";
import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, BarChart3, Brain, GitBranch } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "./SkillsSection.module.css";
import LogoLoop from "./LogoLoop";
import { SiPython, SiJavascript, SiReact, SiGooglecloud, SiAmazonwebservices, SiDocker, SiVercel, SiGithub, SiTypescript, SiNextdotjs, SiOpenai } from "react-icons/si";

const SkillsSection = () => {
  const isMobile = useIsMobile();
  const ref = useScrollReveal({
    threshold: isMobile ? 0.05 : 0.1,
    duration: isMobile ? 500 : 650,
    rootMargin: isMobile ? '0px 0px 0px 0px' : '0px 0px -20px 0px'
  });

  useEffect(() => {
    const section = document.getElementById('skills');
    if (!section) return;

    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = section.querySelectorAll('.skill-card');
          cards.forEach((card, index) => {
            // Faster animation timing for mobile
            const delay = isMobile ? index * 60 : index * 100;
            setTimeout(() => {
              (card as HTMLElement).style.opacity = '1';
              (card as HTMLElement).style.transform = 'translateY(0)';
            }, delay);
          });
          observer.unobserve(entry.target as Element);
        }
      });
    }, {
      threshold: isMobile ? 0.05 : 0.2, // Much lower threshold for mobile
      rootMargin: isMobile ? '0px 0px 0px 0px' : '0px 0px -20px 0px'
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      skills: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
      color: "gradient-purple"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI/ML Frameworks",
      skills: ["Scikit-learn", "Pandas", "NumPy"],
      color: "gradient-pink"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Visualization",
      skills: ["Power BI", "Matplotlib", "Seaborn", "Plotly"],
      color: "gradient-orange"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Platforms",
      skills: ["AWS", "GCP", "Azure", "Docker"],
      color: "gradient-purple"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Databases",
      skills: ["SQL", "MySQL", "MongoDB"],
      color: "gradient-pink"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Tools & Technologies",
      skills: ["Git" , "GitHub", "Jupyter", "VS Code"],
      color: "gradient-orange"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "gradient-purple":
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/5";
      case "gradient-pink":
        return "text-gradient-pink border-gradient-pink/20 bg-gradient-pink/5";
      case "gradient-orange":
        return "text-gradient-orange border-gradient-orange/20 bg-gradient-orange/5";
      default:
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/5";
    }
  };

  // Technology logos for the carousel
  const techLogos = [
    { node: <SiPython size={60} />, title: "Python", href: "https://python.org" },
    { node: <SiJavascript size={60} />, title: "JavaScript", href: "https://javascript.com" },
    { node: <SiReact size={60} />, title: "React", href: "https://react.dev" },
    { node: <SiAmazonwebservices size={60} />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiGooglecloud size={60} />, title: "GCP", href: "https://cloud.google.com" },
    // Custom SVG for Azure since it's not available in react-icons/si
    { 
      node: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.25 3.25L13.25 8.75L18.75 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.75 13.25L18.75 18.75L13.25 18.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.25 18.75L8.75 18.75L8.75 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.75 13.25L8.75 8.75L13.25 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.25 8.75L18.75 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.75 13.25L13.25 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.25 13.25L13.25 18.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.75 8.75L18.75 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.75 8.75L8.75 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      title: "Azure", 
      href: "https://azure.microsoft.com" 
    },
    { node: <SiDocker size={60} />, title: "Docker", href: "https://docker.com" },
    { node: <SiVercel size={60} />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiGithub size={60} />, title: "GitHub", href: "https://github.com" },
    { node: <SiTypescript size={60} />, title: "TypeScript", href: "https://typescriptlang.org" },
    { node: <SiNextdotjs size={60} />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiOpenai size={60} />, title: "Machine Learning", href: "https://openai.com" },
  ];

  return (
    <section id="skills" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Enhanced Mobile Typography */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 slide-in-up" style={{ animationDelay: '0ms' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Technical <GradientText>Skills</GradientText>
          </h2>
          <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            A comprehensive toolkit for building intelligent solutions and data-driven applications
          </p>
        </div>
        
        {/* Skills Grid - Enhanced for Mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-glow p-5 sm:p-6 group hover-lift skill-card opacity-0 transform translate-y-4 transition-all duration-700 ease-out will-change-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(category.color)} mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 will-change-transform flex-shrink-0`}>
                  <div className="h-6 w-6 sm:h-8 sm:w-8">
                    {React.cloneElement(category.icon, { className: "h-full w-full" })}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold leading-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <GradientText
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted/50 border border-border hover:border-accent/30 transition-all duration-300 cursor-default will-change-transform hover:scale-105 active:scale-95 touch-manipulation"
                  >
                    {skill}
                  </GradientText>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Proficiency Bars - Enhanced Mobile Layout */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-12">
            Core <GradientText>Proficiencies</GradientText>
          </h3>
          
          <div className="grid gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto sm:grid-cols-2">
            {[
              { skill: "Python & Data Science", level: 95 },
              { skill: "Machine Learning & AI", level: 90 },
              { skill: "Data Visualization", level: 88 },
              { skill: "Generative AI & LLMs", level: 87 }
            ].map((item, index) => (
              <div key={index} className={`${styles.slideIn} ${styles[`delay-${index === 0 ? '0' : index * 100}`]} will-change-transform`}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-foreground font-medium text-sm sm:text-base">{item.skill}</span>
                  <span className="text-foreground text-sm font-mono">{item.level}%</span>
                </div>
                <div className={styles.progressContainer}>
                  <div 
                    className={`${styles.progressBar} ${styles[`level-${item.level}`]}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Carousel */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-12">
            Technology <GradientText>Stack</GradientText>
          </h3>
          <div className="h-24 flex items-center">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              pauseOnHover
              fadeOut
              scaleOnHover
              fadeOutColor="var(--background)"
              ariaLabel="Technology stack"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;