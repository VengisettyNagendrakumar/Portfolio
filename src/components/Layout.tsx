
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Code, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
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
          "fixed top-0 w-full backdrop-blur-lg z-50 transition-all duration-300",
          isScrolled ? "bg-white/80 shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link 
              to="/" 
              className="text-xl font-semibold tracking-tight transition-colors hover:text-accent"
            >
              Nagendra<span className="text-accent">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent relative py-2 px-1",
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground/80"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-accent" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-lg z-40 animate-fade-in">
            <nav className="flex flex-col items-center p-8 space-y-6 text-lg">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-medium transition-colors hover:text-accent",
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground/80"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-6 mt-8 pt-8 border-t w-full justify-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Nagendrakumar Vengisetty. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
