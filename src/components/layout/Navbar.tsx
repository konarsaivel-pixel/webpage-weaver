import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const servicesLinks = [
  { href: "/enterprise-application-development", label: "Enterprise Application Development" },
  { href: "/liferay-dxp", label: "Liferay DXP" },
  { href: "/outsourcing", label: "Outsource" },
  { href: "/cybersecurity", label: "Cybersecurity Services" },
  { href: "/data-science-ai", label: "Data Science & AI" },
];

const trainingLinks = [
  { 
    href: "/training/web-full-stack", 
    label: "Web Full Stack Development",
    topics: "HTML5, CSS3, JavaScript, React, Node.js, MongoDB",
    duration: "16+ projects • 61 hours"
  },
  { 
    href: "/training/java-full-stack", 
    label: "Java Full Stack Development",
    topics: "Java 17, Spring Boot, Hibernate, React, MySQL",
    duration: "90 hours • 650+ lectures"
  },
  { 
    href: "/training/data-science", 
    label: "Data Science & AI",
    topics: "Python, Pandas, SQL, Power BI, Machine Learning",
    duration: "88.5 hours"
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary-glow shadow-lg animate-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
              <span className="gradient-text font-bold text-xl">S</span>
            </div>
            <h2 className="text-white font-bold text-lg md:text-xl transition-transform group-hover:scale-105">
              Solugenious AI Techs
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="nav-item relative">
              <button className="px-4 py-6 text-white font-medium hover:bg-white/10 transition-colors">
                Services
              </button>
              <div className="dropdown-menu">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`dropdown-item ${isActive(link.href) ? 'bg-muted' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="nav-item relative">
              <button className="px-4 py-6 text-white font-medium hover:bg-white/10 transition-colors">
                Industries
              </button>
              <div className="dropdown-menu">
                <Link to="/industries/bfsi" className="dropdown-item">BFSI</Link>
              </div>
            </div>

            <div className="nav-item relative">
              <button className="px-4 py-6 text-white font-medium hover:bg-white/10 transition-colors">
                Training
              </button>
              <div className="dropdown-menu min-w-[320px]">
                {trainingLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="dropdown-item flex flex-col gap-1"
                  >
                    <strong className="text-foreground">{link.label}</strong>
                    <small className="text-primary text-xs">{link.topics}</small>
                    <small className="text-muted-foreground text-xs">{link.duration}</small>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/careers" className="px-4 py-6 text-white font-medium hover:bg-white/10 transition-colors">
              Careers
            </Link>

            <Link to="/about" className="px-4 py-6 text-white font-medium hover:bg-white/10 transition-colors">
              About
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-3 ml-4 border-l border-white/20 pl-4">
              <a href="https://x.com/solugenious" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="https://www.instagram.com/solugeniousaitechs/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/company/solugenious" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>

            {/* Register Button */}
            <Link 
              to="/register" 
              className="ml-4 px-6 py-2.5 bg-white text-primary font-semibold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Services</div>
            {servicesLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-t border-border my-4"></div>
            
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Training</div>
            {trainingLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-t border-border my-4"></div>
            
            <Link
              to="/careers"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            
            <Link
              to="/about"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="pt-4">
              <Link 
                to="/register" 
                className="btn-primary w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
