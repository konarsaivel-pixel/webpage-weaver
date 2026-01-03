import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: "fas fa-shield-virus",
    title: "Managed Security Services",
    description: "24/7 monitoring, threat detection, and incident response for complete protection"
  },
  {
    icon: "fas fa-bug",
    title: "VAPT Services",
    description: "Comprehensive vulnerability assessment and penetration testing"
  },
  {
    icon: "fas fa-fire-alt",
    title: "Firewall Management",
    description: "Advanced firewall configuration, monitoring, and optimization"
  },
  {
    icon: "fas fa-cloud-upload-alt",
    title: "Cloud Security",
    description: "Secure your cloud infrastructure across AWS, Azure, and GCP"
  },
  {
    icon: "fas fa-user-shield",
    title: "Identity Management",
    description: "Implement robust identity and access management solutions"
  },
  {
    icon: "fas fa-exclamation-triangle",
    title: "Incident Response",
    description: "Rapid response and recovery from security incidents"
  },
];

const stats = [
  { number: "99.9%", label: "Uptime SLA" },
  { number: "24/7", label: "Security Monitoring" },
  { number: "<15min", label: "Incident Response" },
  { number: "100+", label: "Enterprises Protected" },
];

const comparison = [
  { feature: "24/7 Security Monitoring", inHouse: false, mssp: true },
  { feature: "Access to Latest Security Tools", inHouse: false, mssp: true },
  { feature: "Team of Certified Experts", inHouse: false, mssp: true },
  { feature: "Predictable Monthly Costs", inHouse: false, mssp: true },
  { feature: "Rapid Incident Response", inHouse: false, mssp: true },
  { feature: "Compliance Management", inHouse: false, mssp: true },
];

const Cybersecurity = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
                <i className="fas fa-shield-alt text-sm"></i>
                <span className="text-sm font-medium">Certified MSSP Partner</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Cybersecurity Services
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                Protect your organization from evolving cyber threats with our comprehensive managed security services. 24/7 monitoring, rapid incident response, and enterprise-grade protection.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/register" className="btn-white">
                  <span>Schedule Consultation</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <a href="#services" className="btn-outline">
                  <span>View Services</span>
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/15 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                    <h3 className="text-2xl font-bold mb-1">{stat.number}</h3>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="w-full aspect-square bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                      <i className="fas fa-shield-alt text-6xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Enterprise Protection</h3>
                    <p className="text-white/80">360° Security Coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-white" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Security Services</h2>
          <p className="section-subtitle">
            Comprehensive cybersecurity solutions for modern enterprises
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="feature-card">
                <i className={`${service.icon} feature-card-icon`}></i>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section section-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">In-House vs Managed Security Services</h2>
          <p className="section-subtitle">
            See how partnering with an MSSP compares to traditional in-house security management
          </p>
          
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-muted p-4 font-semibold text-center">
              <span>Feature</span>
              <span>In-House</span>
              <span>MSSP</span>
            </div>
            {comparison.map((item, index) => (
              <div key={index} className="grid grid-cols-3 p-4 border-t border-border items-center text-center">
                <span className="text-left font-medium text-foreground">{item.feature}</span>
                <span>
                  <i className={`fas fa-times-circle text-xl ${item.inHouse ? 'text-success' : 'text-destructive'}`}></i>
                </span>
                <span>
                  <i className={`fas fa-check-circle text-xl ${item.mssp ? 'text-success' : 'text-destructive'}`}></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section section-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Industries We Protect</h2>
          <p className="section-subtitle">
            Specialized security solutions for regulated industries
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-university", title: "BFSI", desc: "Banking, Financial Services & Insurance" },
              { icon: "fas fa-hospital", title: "Healthcare", desc: "HIPAA compliant security solutions" },
              { icon: "fas fa-industry", title: "Manufacturing", desc: "OT/IT security convergence" },
              { icon: "fas fa-shopping-cart", title: "Retail", desc: "PCI-DSS compliance and protection" },
            ].map((industry, index) => (
              <div key={index} className="feature-card">
                <i className={`${industry.icon} feature-card-icon`}></i>
                <h3 className="text-lg font-bold mb-2 text-foreground">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="fas fa-shield-alt text-4xl"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let our certified security experts help protect your organization from evolving cyber threats
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-white">
              <span>Schedule a Security Consultation</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cybersecurity;
