import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Brain, CloudCog, Plane, Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
import GradientText from "./GradientText";
import StatCard from "@/components/StatCard";

const CertificationsSection = () => {
  // Mobile-optimized scroll reveal with lower threshold
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const ref = useScrollReveal({
    threshold: isMobile ? 0.02 : 0.1,
    duration: 700,
    rootMargin: isMobile ? '0px 0px 0px 0px' : '0px 0px -20px 0px'
  });
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      date: "Dec 2025",
      category: "Data Science",
      icon: <CloudCog className="h-6 w-6" />,
      color: "gradient-red",
      description: "Professional certification validating expertise in designing and implementing data science solutions on Oracle Cloud Infrastructure.",
      skills: ["OCI Data Science", "Machine Learning", "Model Deployment"]
    },
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft",
      date: "Dec 2025",
      category: "Artificial Intelligence",
      icon: <Brain className="h-6 w-6" />,
      color: "gradient-blue",
      description: "Comprehensive professional certificate covering Azure AI fundamentals and generative AI concepts.",
      skills: ["Azure AI", "Generative AI", "Cloud Computing"]
    },
    {
      title: "British Airways Data Science Job Simulation",
      issuer: "Forage",
      date: "Feb 2025",
      category: "Data Analytics",
      icon: <Plane className="h-6 w-6" />,
      color: "gradient-sky",
      description: "Completed a simulation focusing on web scraping to gain insights into customer booking behavior and predictive modeling.",
      skills: ["Web Scraping", "Predictive Modeling", "Customer Insights"]
    },
    {
      title: "Lloyds Banking Group Data Science Job Simulation",
      issuer: "Forage",
      date: "Feb 2025",
      category: "Data Science",
      icon: <Building2 className="h-6 w-6" />,
      color: "gradient-green",
      description: "Worked on predictive modeling simulation to forecast customer churn and improve retention strategies.",
      skills: ["Churn Prediction", "Random Forest", "Data Visualization"]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "gradient-red":
        return "dark:text-red-400 text-red-600 border-red-200 dark:border-red-900/20 bg-red-50 dark:bg-red-900/10";
      case "gradient-green":
        return "dark:text-green-400 text-green-600 border-green-200 dark:border-green-900/20 bg-green-50 dark:bg-green-900/10";
      case "gradient-blue":
        return "dark:text-blue-400 text-blue-600 border-blue-200 dark:border-blue-900/20 bg-blue-50 dark:bg-blue-900/10";
      case "gradient-sky":
        return "dark:text-sky-400 text-sky-600 border-sky-200 dark:border-sky-900/20 bg-sky-50 dark:bg-sky-900/10";
      case "gradient-purple":
        return "dark:text-purple-400 text-purple-600 border-purple-200 dark:border-purple-900/20 bg-purple-50 dark:bg-purple-900/10";
      case "gradient-pink":
        return "dark:text-pink-400 text-pink-600 border-pink-200 dark:border-pink-900/20 bg-pink-50 dark:bg-pink-900/10";
      case "gradient-orange":
        return "dark:text-orange-400 text-orange-600 border-orange-200 dark:border-orange-900/20 bg-orange-50 dark:bg-orange-900/10";
      default:
        return "dark:text-purple-400 text-purple-600 border-purple-200 dark:border-purple-900/20 bg-purple-50 dark:bg-purple-900/10";
    }
  };

  const categories = [...new Set(certifications.map(cert => cert.category))];

  // Animate certifications on reveal with mobile optimization
  useEffect(() => {
    const section = document.getElementById('certifications');
    const grid = document.getElementById('certs-grid');
    if (!section || !grid) return;

    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = grid.querySelectorAll('.cert-card');
          cards.forEach((card, index) => {
            // Faster animation timing for mobile
            const delay = isMobile ? index * 50 : index * 80;
            setTimeout(() => {
              (card as HTMLElement).style.opacity = '1';
              (card as HTMLElement).style.transform = 'translateY(0)';
            }, delay);
          });
          observer.unobserve(entry.target as Element);
        }
      });
    }, {
      threshold: isMobile ? 0.05 : 0.25, // Much lower threshold for mobile
      rootMargin: isMobile ? '0px 0px 0px 0px' : '0px 0px -20px 0px'
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 relative bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up" style={{ animationDelay: '0ms' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>Certifications</GradientText> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 bg-background dark:bg-card/80 hover:bg-accent/10 border-border hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="certs-grid">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="card-glow p-6 group cursor-pointer bg-card dark:bg-card/80 border-border cert-card opacity-0 transform translate-y-6 transition-all duration-700 ease-out"
              style={{ animationDelay: `${(index + 2) * 80}ms` }}
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(cert.color)} group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <a
                  href="https://www.linkedin.com/in/datascyther/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View all certifications on LinkedIn"
                  className="flex items-center justify-center h-10 w-10 md:h-11 md:w-11"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4 text-secondary group-hover:text-accent transition-colors duration-300" />
                </a>
              </div>

              {/* Certificate Info */}
              <div className="mb-4">
                <Badge className={`mb-2 ${getColorClass(cert.color)}`}>
                  {cert.category}
                </Badge>
                <h3 className="text-lg font-semibold mb-2 leading-tight">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-secondary mb-3">
                  <Award className="h-4 w-4" />
                  <GradientText>{cert.issuer}</GradientText>
                  <GradientText>•</GradientText>
                  <GradientText>{cert.date}</GradientText>
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-2 text-xs uppercase tracking-wide">Skills Gained</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs rounded-md bg-muted dark:bg-muted/20 border border-border text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* Animated Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { number: 15, suffix: "+", label: "Certifications", color: "gradient-purple" },
            { number: 5, suffix: "", label: "Major Platforms", color: "gradient-pink" },
            { number: 3, suffix: "+", label: "Years Learning", color: "gradient-orange" },
            { number: 4, suffix: "", label: "Key Domains", color: "gradient-blue" }
          ].map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              color={stat.color}
              delay={index}
              className="hover:transform hover:scale-105 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;