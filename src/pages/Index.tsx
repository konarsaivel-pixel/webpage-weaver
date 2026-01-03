import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Enterprise Applications",
    description: "Custom enterprise solutions tailored to your business needs with scalable architecture.",
    link: "/enterprise-application-development"
  },
  {
    icon: "fas fa-layer-group",
    title: "Liferay DXP",
    description: "Digital experience platform solutions for seamless customer engagement.",
    link: "/liferay-dxp"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Cybersecurity",
    description: "Comprehensive security services to protect your digital assets 24/7.",
    link: "/cybersecurity"
  },
  {
    icon: "fas fa-brain",
    title: "Data Science & AI",
    description: "Unlock insights with machine learning and advanced analytics solutions.",
    link: "/data-science-ai"
  },
  {
    icon: "fas fa-users-cog",
    title: "Outsourcing",
    description: "Scale your team with our skilled professionals and reduce operational costs.",
    link: "/outsourcing"
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Consulting",
    description: "Cloud migration, optimization, and management services for modern businesses.",
    link: "/enterprise-application-development"
  },
];

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "150+", label: "Happy Clients" },
  { number: "50+", label: "Expert Team" },
  { number: "10+", label: "Years Experience" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
                <i className="fas fa-rocket text-sm"></i>
                <span className="text-sm font-medium">Transforming Businesses with AI</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Innovative AI Solutions for{" "}
                <span className="underline decoration-white/30 decoration-4 underline-offset-8">
                  Enterprise Growth
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                Empowering organizations with cutting-edge technology solutions, from enterprise applications to AI-driven insights. Your trusted partner in digital transformation.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/enterprise-application-development" className="btn-white">
                  <span>Explore Services</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/register" className="btn-outline">
                  <span>Get Started</span>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/15 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</h3>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="w-full aspect-square bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-white/20 rounded-2xl p-6 flex flex-col justify-center items-center animate-float">
                      <i className="fas fa-chart-line text-4xl mb-3"></i>
                      <span className="font-medium">Analytics</span>
                    </div>
                    <div className="bg-white/20 rounded-2xl p-6 flex flex-col justify-center items-center animate-float animation-delay-200">
                      <i className="fas fa-shield-alt text-4xl mb-3"></i>
                      <span className="font-medium">Security</span>
                    </div>
                    <div className="bg-white/20 rounded-2xl p-6 flex flex-col justify-center items-center animate-float animation-delay-400">
                      <i className="fas fa-robot text-4xl mb-3"></i>
                      <span className="font-medium">AI/ML</span>
                    </div>
                    <div className="bg-white/20 rounded-2xl p-6 flex flex-col justify-center items-center animate-float">
                      <i className="fas fa-cloud text-4xl mb-3"></i>
                      <span className="font-medium">Cloud</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
                    <i className="fas fa-check text-white text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Trusted Partner</h4>
                    <p className="text-sm text-muted-foreground">ISO Certified</p>
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
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions designed to accelerate your digital transformation journey
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="feature-card group"
              >
                <i className={`${service.icon} feature-card-icon`}></i>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <i className="fas fa-arrow-right text-sm"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Why Choose Solugenious?</h2>
          <p className="section-subtitle">
            Partner with a team that understands your vision and delivers excellence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "fas fa-award", title: "Industry Expertise", desc: "Over a decade of experience across multiple industries" },
              { icon: "fas fa-users", title: "Dedicated Teams", desc: "Skilled professionals committed to your success" },
              { icon: "fas fa-clock", title: "24/7 Support", desc: "Round-the-clock assistance and maintenance" },
              { icon: "fas fa-cogs", title: "Agile Methodology", desc: "Flexible and iterative development approach" },
              { icon: "fas fa-dollar-sign", title: "Cost-Effective", desc: "Optimized solutions maximizing your ROI" },
              { icon: "fas fa-lock", title: "Data Security", desc: "Enterprise-grade security for your data" },
            ].map((item, index) => (
              <div key={index} className="benefit-item">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`${item.icon} text-white`}></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss how our technology solutions can help you achieve your business goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-white">
              <span>Get Started Today</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="mailto:careers@solugeniousaitechs.com" className="btn-outline">
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
