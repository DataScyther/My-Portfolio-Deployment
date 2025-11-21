import { useRef } from 'react';
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


const Index = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  return (
    <div className="min-h-screen w-full bg-[#fefcff] dark:bg-background relative overflow-hidden">
      {/* Dreamy Sky Pink Glow Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="h-full w-full block dark:hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
              radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
            `,
          }}
        />
        <div
          className="h-full w-full hidden dark:block"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.22), transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(244, 114, 182, 0.25), transparent 60%),
              radial-gradient(circle at 50% 10%, rgba(129, 140, 248, 0.22), transparent 65%)
            `,
          }}
        />
      </div>
      <Navigation />
      <main>
        <section id="home" ref={el => sectionRefs.current['home'] = el}>
          <HeroSection />
        </section>
        <section id="about" ref={el => sectionRefs.current['about'] = el}>
          <AboutSection />
        </section>
        <section id="skills" ref={el => sectionRefs.current['skills'] = el}>
          <SkillsSection />
        </section>
        <section id="experience" ref={el => sectionRefs.current['experience'] = el}>
          <ExperienceSection />
        </section>
        <section id="projects" ref={el => sectionRefs.current['projects'] = el}>
          <ProjectsSection />
        </section>
        <section id="certifications" ref={el => sectionRefs.current['certifications'] = el}>
          <CertificationsSection />
        </section>
        <section id="contact" ref={el => sectionRefs.current['contact'] = el}>
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;