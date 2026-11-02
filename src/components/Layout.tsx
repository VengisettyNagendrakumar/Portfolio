
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Code, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/portfolio";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const section = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash, location.pathname]);

  const navigationLinks = [
    { name: "ABOUT", path: "/#about" },
    { name: "EXPERIENCE", path: "/#experience" },
    { name: "SKILLS", path: "/#skills" },
    { name: "PROJECTS", path: "/#projects" },
    { name: "CONTACT", path: "/#contact" },
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github className="h-5 w-5" />, 
      url: "https://github.com/VengisettyNagendrakumar" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "https://www.linkedin.com/in/nagendra-kumar-vengisetty-253079253/" 
    },
    { 
      name: "LeetCode", 
      icon: <Code className="h-5 w-5" />, 
      url: "https://leetcode.com/u/nagendravengisetti" 
    },
    { 
      name: "Email", 
      icon: <Mail className="h-5 w-5" />, 
      url: "mailto:nagendravengisetti@gmail.com" 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header
        className={cn(
          "portfolio-header sticky top-0 z-50 transition-all duration-300",
          isScrolled && "portfolio-header-scrolled"
        )}
      >
        <div className="portfolio-nav-container">
          <div className="flex items-center justify-between gap-5 py-3">
            <Link 
              to="/" 
              className="portfolio-brand"
            >
              NV<span>.</span>
            </Link>

            <nav aria-label="Primary" className="portfolio-nav">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.path.split("#")[1]}`}
                  className="portfolio-nav-link"
                  onClick={() => {
                    document.getElementById(link.path.split("#")[1])?.scrollIntoView({
                      behavior: "instant",
                      block: "start",
                    });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="portfolio-container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            // © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="portfolio-social-link"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
