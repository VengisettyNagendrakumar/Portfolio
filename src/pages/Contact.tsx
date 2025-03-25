
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { personalInfo, socialData } from "@/data/portfolio";

const Contact = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get in Touch"
          subtitle="Have a question or want to work together? Feel free to reach out to me."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <p className="text-lg">
              I'm interested in freelance opportunities, especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to use the contact form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-4">
              <h3 className="font-medium mb-4">Find me on</h3>
              <div className="flex gap-4">
                <a 
                  href={socialData.find(s => s.platform === "GitHub")?.url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={socialData.find(s => s.platform === "LinkedIn")?.url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={socialData.find(s => s.platform === "LeetCode")?.url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                  aria-label="LeetCode"
                >
                  <Code className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border shadow-sm animate-fade-in animate-delay-200">
            <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
