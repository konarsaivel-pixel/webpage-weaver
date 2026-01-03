import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: "fas fa-code",
    title: "Software Development",
    description: "Dedicated development teams for web, mobile, and enterprise applications"
  },
  {
    icon: "fas fa-headset",
    title: "IT Support Services",
    description: "24/7 technical support and helpdesk services for your customers"
  },
  {
    icon: "fas fa-database",
    title: "Data Processing",
    description: "Data entry, management, and analytics outsourcing"
  },
  {
    icon: "fas fa-chart-line",
    title: "Business Analytics",
    description: "Market research, data analysis, and business intelligence"
  },
  {
    icon: "fas fa-flask",
    title: "QA & Testing",
    description: "Comprehensive testing services ensuring quality deliverables"
  },
  {
    icon: "fas fa-tasks",
    title: "Project Management",
    description: "End-to-end project management and delivery"
  },
];

const benefits = [
  { icon: "fas fa-dollar-sign", title: "Cost Savings", desc: "Reduce operational costs by up to 60%" },
  { icon: "fas fa-user-tie", title: "Skilled Workforce", desc: "Access to highly skilled professionals" },
  { icon: "fas fa-expand-arrows-alt", title: "Scalability", desc: "Scale resources up or down as needed" },
  { icon: "fas fa-bullseye", title: "Focus on Core Business", desc: "Concentrate on strategic initiatives" },
];

const Outsourcing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Outsourcing Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Scale your business with our flexible, cost-effective outsourcing solutions. Access global talent, reduce operational costs, and focus on your core business while we handle the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-white">
              <span>Get Started</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="#services" className="btn-outline">
              <span>View Services</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-white" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our Outsourcing Solutions</h2>
          <p className="section-subtitle">
            Comprehensive services to support your business growth
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

      {/* Benefits Section */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Why Outsource With Us?</h2>
          <p className="section-subtitle">
            Partner with a team that delivers excellence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item flex-col text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${benefit.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our Engagement Model</h2>
          <p className="section-subtitle">
            Flexible engagement models tailored to your needs
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Dedicated Team", desc: "Full-time team working exclusively on your projects" },
              { step: "02", title: "Staff Augmentation", desc: "Extend your team with our skilled professionals" },
              { step: "03", title: "Project-Based", desc: "Complete project delivery with fixed scope and timeline" },
            ].map((model, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{model.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{model.title}</h3>
                <p className="text-muted-foreground">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss how our outsourcing services can benefit your business
          </p>
          <Link to="/register" className="btn-white">
            <span>Get Started Today</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Outsourcing;
