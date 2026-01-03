import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <i className="fas fa-shield-alt text-white text-lg"></i>
              </div>
              <span className="font-bold text-xl">Solugenious</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Leading provider of AI-powered solutions and technology services. Your trusted partner in digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/enterprise-application-development" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-5">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/industries/bfsi" className="text-white/70 hover:text-white hover:pl-1 transition-all duration-200">
                  BFSI
                </Link>
              </li>
              <li>
                <span className="text-white/70">Healthcare</span>
              </li>
              <li>
                <span className="text-white/70">Retail</span>
              </li>
              <li>
                <span className="text-white/70">Manufacturing</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Navi Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="fas fa-phone text-primary"></i>
                <a href="tel:+919082085560" className="hover:text-white transition-colors">
                  +91-9082085560
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="fas fa-envelope text-primary"></i>
                <a href="mailto:careers@solugeniousaitechs.com" className="hover:text-white transition-colors">
                  careers@solugeniousaitechs.com
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://x.com/solugenious" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="https://www.instagram.com/solugeniousaitechs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.linkedin.com/company/solugenious" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Solugenious AI Services Technology Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
