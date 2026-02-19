import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GradientText from "./GradientText";
import { Building2, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ExperienceSection = () => {
  const ref = useScrollReveal({ threshold: 0.1, duration: 700 });

  const experiences = [
    {
      title: "Founder & Content Strategist",
      company: "Mighty-Tech Shorts",
      location: "Greater Delhi Area, India",
      duration: "Sep 2022 – Present",
      type: "Content Creation",
      description: "Scaling a tech-focused media brand to 170,000+ subscribers. Specializing in short-form video SEO, audience retention strategies, and data-driven content creation.",
      achievements: [
        "Scaled media brand to 170k+ subscribers",
        "Managed 3.5M+ monthly impressions",
        "Data-driven content strategy & retention optimization",
        "End-to-end video production & SEO"
      ],
      color: "gradient-purple"
    },
    {
      title: "Emerging Technologies Intern",
      company: "Microsoft Learning",
      location: "Greater Delhi Area, India",
      duration: "Dec 2025 – Jan 2026",
      type: "Internship",
      description: "Executed a 4-week intensive technical project focused on Industry 5.0 through the AICTE-facilitated Microsoft Elevate program, collaborating with industry mentors.",
      achievements: [
        "Executed Industry 5.0 technical project",
        "Applied emerging technology concepts",
        "Collaborated in Microsoft Elevate program",
        "Technical problem solving & implementation"
      ],
      color: "gradient-blue"
    },
    {
      title: "AI Intern",
      company: "1M1B (1 Million for 1 Billion)",
      location: "Greater Delhi Area",
      duration: "Dec 2025 – Jan 2026",
      type: "Internship",
      description: "Completed a virtual internship applying Generative AI and LLMs, including IBM Granite models and RAG frameworks, to sustainability-focused solutions.",
      achievements: [
        "Applied Generative AI & RAG frameworks",
        "Worked with IBM Granite models",
        "Developed sustainability-focused AI solutions",
        "Collaborated with IBM & 1M1B professionals"
      ],
      color: "gradient-green"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "gradient-purple":
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/10";
      case "gradient-pink":
        return "text-gradient-pink border-gradient-pink/20 bg-gradient-pink/10";
      case "gradient-orange":
        return "text-gradient-orange border-gradient-orange/20 bg-gradient-orange/10";
      default:
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/10";
    }
  };

  return (
    <section id="experience" ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/src/assets/data-dots-pattern.svg"
          className="w-full h-full object-cover text-primary dark:text-primary opacity-10"
          aria-hidden="true"
          alt=""
        />
        {/* Additional decorative elements */}
        <div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-gradient-pink/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-gradient-orange/10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up" style={{ animationDelay: '0ms' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <GradientText>Experience</GradientText>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Building expertise through diverse experiences in data science, analytics, and technology education
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="card-glow p-6 slide-in-up hover-lift transition-all duration-700 ease-out relative overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Card background pattern */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src="/src/assets/experience-card-overlay.svg"
                  className="w-full h-full object-cover text-primary dark:text-primary opacity-10"
                  aria-hidden="true"
                  alt=""
                />
                {/* Corner decoration */}
                <div className={`absolute top-0 right-0 w-40 h-40 opacity-5 ${exp.color === 'gradient-purple' ? 'bg-gradient-purple' : exp.color === 'gradient-pink' ? 'bg-gradient-pink' : 'bg-gradient-orange'} rounded-bl-full`}></div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Info */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-center mb-2">
                    <Building2 className="h-5 w-5 text-accent mr-2" />
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                  </div>

                  <GradientText as="h4" className="text-lg font-medium mb-3">{exp.title}</GradientText>

                  <div className="space-y-2 text-sm text-secondary">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  <Badge className={`mt-3 ${getColorClass(exp.color)}`}>
                    {exp.type}
                  </Badge>
                </div>

                {/* Experience Details */}
                <div className="lg:w-2/3">
                  <p className="text-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="font-semibold mb-3">Key Achievements:</h5>
                    <div className="grid gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></div>
                          <GradientText className="text-sm">{achievement}</GradientText>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;