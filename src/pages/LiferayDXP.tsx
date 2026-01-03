import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const features = [
  {
    icon: "fas fa-globe",
    title: "Portal Development",
    description: "Custom portal solutions with seamless user experience and enterprise integration"
  },
  {
    icon: "fas fa-users",
    title: "Customer Experience",
    description: "Personalized digital experiences that engage and retain customers"
  },
  {
    icon: "fas fa-cogs",
    title: "System Integration",
    description: "Connect Liferay with your existing systems for unified operations"
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Responsive Design",
    description: "Mobile-first approach ensuring optimal experience across all devices"
  },
  {
    icon: "fas fa-chart-line",
    title: "Analytics & Insights",
    description: "Built-in analytics to track user engagement and optimize performance"
  },
  {
    icon: "fas fa-lock",
    title: "Enterprise Security",
    description: "Role-based access control and enterprise-grade security features"
  },
];

const services = [
  "Portal Development & Customization",
  "Theme & Layout Development",
  "Custom Portlet Development",
  "Migration & Upgrades",
  "Integration Services",
  "Maintenance & Support"
];

const LiferayDXP = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Liferay DXP Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transform your digital experience with Liferay DXP. Build engaging portals, intranets, and customer-facing applications that drive business value.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-white">
              <span>Start Your Project</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="#features" className="btn-outline">
              <span>Explore Capabilities</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-white" id="features">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Liferay DXP Capabilities</h2>
          <p className="section-subtitle">
            Leverage the full power of Liferay Digital Experience Platform
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <i className={`${feature.icon} feature-card-icon`}></i>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our Liferay Services</h2>
          <p className="section-subtitle">
            End-to-end Liferay development and support services
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="benefit-item">
                <i className="fas fa-check-circle text-2xl text-success flex-shrink-0"></i>
                <div>
                  <h4 className="font-semibold text-foreground">{service}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section section-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Use Cases</h2>
          <p className="section-subtitle">
            Discover how organizations leverage Liferay DXP
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-building", title: "Corporate Intranets", desc: "Employee portals for internal communication" },
              { icon: "fas fa-shopping-cart", title: "E-Commerce", desc: "B2B commerce portals with self-service" },
              { icon: "fas fa-headset", title: "Customer Portals", desc: "Self-service support and account management" },
              { icon: "fas fa-university", title: "Partner Networks", desc: "Collaboration portals for partners" },
            ].map((useCase, index) => (
              <div key={index} className="feature-card">
                <i className={`${useCase.icon} feature-card-icon`}></i>
                <h3 className="text-lg font-bold mb-2 text-foreground">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Partner with our certified Liferay experts to build world-class digital experiences
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

export default LiferayDXP;
