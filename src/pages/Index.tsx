import { useRef } from 'react';
import { PillNav } from "@/components";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.svg";

const Index = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PillNav 
        logo={logo}
        logoAlt="Nishant Kumar Logo"
        items={navItems}
        activeHref="#home"
      />
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