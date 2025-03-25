
import { Mail, MapPin, FileText, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillsList from "@/components/SkillsList";
import { personalInfo, educationData, experienceData, skillsData, certificatesData } from "@/data/portfolio";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* About Hero */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                About Me<span className="text-accent">.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Full Stack Developer with expertise in frontend, backend, and database management. 
                I specialize in creating scalable and high-performance web applications using modern technologies.
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <Button asChild variant="outline">
                  <a href="https://drive.google.com/file/d/1NCwD2KrvJFT579Uxp8mWIBqOGylMGmVj/view" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in animate-delay-200">
              <div className="aspect-[4/3] bg-accent/10 flex items-center justify-center">
                <span className="text-lg text-muted-foreground"><img src="./public/nagendrakumar.jpg" alt="nagendra" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Education"
            icon={<GraduationCap className="h-6 w-6" />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((education, index) => (
              <EducationCard 
                key={index} 
                education={education} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Experience"
            icon={<Briefcase className="h-6 w-6" />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experienceData.map((experience, index) => (
              <ExperienceCard 
                key={index} 
                experience={experience} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills & Certifications Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Skills" />
              <SkillsList skills={skillsData} className="animate-fade-in" />
            </div>
            
            <div>
              <SectionHeading title="Certifications" />
              <div className="space-y-6 animate-fade-in animate-delay-100">
                {certificatesData.map((certificate, index) => (
                  <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="font-medium">{certificate.name}</h3>
                    <p className="text-sm text-muted-foreground">Issued by {certificate.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
