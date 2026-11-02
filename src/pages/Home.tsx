import { Github, Linkedin, Mail, ArrowUpRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SkillsList from "@/components/SkillsList";
import ContactForm from "@/components/ContactForm";
import { certificatesData, educationData, experienceData, personalInfo, projectsData, resumeUrl, skillsData, socialData } from "@/data/portfolio";

const Home = () => {
  const currentExperience = experienceData[0];

  return (
    <div className="portfolio-page">
      <section id="about">
        <div className="portfolio-container hero-section">
          <p className="terminal-prompt"><span aria-hidden="true">&gt;</span> ./init_profile.sh --force</p>
          <p className="section-label">AI · SOFTWARE · MACHINE LEARNING</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-title">{personalInfo.title}</p>
          <p className="hero-summary">
            Building production AI across computer vision, NLP, LLM evaluation, and recommendation systems serving 100,000+ users.
          </p>

          <div className="current-role-panel">
            <p className="role-line">
              <span className="role-label">CURRENT ROLE</span>
              <span>{currentExperience.role} @ {currentExperience.company}</span>
            </p>
            <ul className="role-highlights">
              {[
                "Built real-time AI proctoring with face, object, and voice detection using FastAPI, Celery, and Redis.",
                "Raised coding-evaluation reliability to 93% and job-skill extraction accuracy from 72% to 87%.",
              ].map((highlight) => (
                <li key={highlight}><span aria-hidden="true">&raquo;</span>{highlight}</li>
              ))}
            </ul>
          </div>

          <details className="professional-summary">
            <summary>PROFESSIONAL_SUMMARY</summary>
            <p>{personalInfo.bio}</p>
          </details>

          <div className="hero-links">
            <Button asChild>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />View Résumé
              </a>
            </Button>
            {socialData.filter(({ platform }) => platform === "GitHub" || platform === "LinkedIn").map((social) => (
              <Button key={social.platform} asChild variant="outline">
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.platform === "GitHub" ? <Github className="mr-2 h-4 w-4" /> : <Linkedin className="mr-2 h-4 w-4" />}
                  {social.platform}<ArrowUpRight className="ml-2 h-3 w-3" />
                </a>
              </Button>
            ))}
            <Button asChild variant="outline">
              <a href={`mailto:${personalInfo.email}`}><Mail className="mr-2 h-4 w-4" />Email</a>
            </Button>
          </div>

          <div className="education-section">
            <p className="section-kicker">// EDUCATION_LOG</p>
            <div className="grid gap-4 md:grid-cols-2">
              {educationData.map((education) => (
                <EducationCard key={education.institution} education={education} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="portfolio-section">
        <div className="portfolio-container">
          <p className="section-kicker">// EXPERIENCE_LOG</p>
          <h2 className="portfolio-heading">Professional Experience</h2>
          <p className="section-intro">Production AI systems and full-stack development at MeetMux and PlaceMux.</p>
          {experienceData.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              className="experience-panel"
            />
          ))}
        </div>
      </section>

      <section id="skills" className="portfolio-section">
        <div className="portfolio-container">
          <p className="section-kicker">// TOOLKIT</p>
          <h2 className="portfolio-heading">Skills</h2>
          <SkillsList skills={skillsData} className="skills-grid" />
          <div className="certification-list">
            <h3 className="section-kicker">// CERTIFICATIONS</h3>
            <div className="flex flex-wrap gap-2">
              {certificatesData.map(({ name, issuer }) => (
                <Badge key={name} variant="outline" className="certificate-badge">{name} <span className="ml-1 opacity-70">/ {issuer}</span></Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio-section">
        <div className="portfolio-container">
          <p className="section-kicker">// PROJECTS</p>
          <h2 className="portfolio-heading">Selected Work</h2>
          <p className="section-intro">A selection of AI, machine learning, and full-stack projects.</p>
          <div className="grid gap-5 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                className="project-panel"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="portfolio-section contact-section">
        <div className="portfolio-container">
          <p className="section-kicker">// CONTACT_CHANNEL</p>
          <h2 className="portfolio-heading">Let&apos;s connect.</h2>
          <p className="section-intro">
            For opportunities or questions about my AI/ML and software projects, reach out by email.
          </p>
          <a className="contact-email" href={`mailto:${personalInfo.email}`}>
            {personalInfo.email}<ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="contact-meta">
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.location}</span>
          </div>
          <div className="contact-form-panel">
            <p className="section-kicker">// INITIATE_TRANSMISSION</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
