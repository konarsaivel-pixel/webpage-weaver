import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const features = [
  {
    icon: "fas fa-cubes",
    title: "Microservices Architecture",
    description: "Build scalable, maintainable applications with modern microservices patterns"
  },
  {
    icon: "fas fa-sync-alt",
    title: "API Integration",
    description: "Seamless integration with existing systems and third-party services"
  },
  {
    icon: "fas fa-database",
    title: "Data Management",
    description: "Robust database solutions for efficient data storage and retrieval"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Enterprise Security",
    description: "Industry-standard security practices to protect your business data"
  },
  {
    icon: "fas fa-cloud-upload-alt",
    title: "Cloud Deployment",
    description: "Deploy on AWS, Azure, or GCP with automated CI/CD pipelines"
  },
  {
    icon: "fas fa-chart-bar",
    title: "Business Analytics",
    description: "Built-in analytics and reporting for data-driven decisions"
  },
];

const technologies = [
  { icon: "fab fa-java", name: "Java Ecosystem", tech: "Spring Boot, Hibernate, Microservices, JEE" },
  { icon: "fab fa-microsoft", name: ".NET Framework", tech: ".NET Core, ASP.NET, C#, Azure Services" },
  { icon: "fab fa-python", name: "Python", tech: "Django, Flask, FastAPI, Data Analytics" },
  { icon: "fab fa-node-js", name: "Node.js", tech: "Express, NestJS, Real-time Applications" },
];

const benefits = [
  { title: "Scalable Solutions", desc: "Applications that grow with your business needs" },
  { title: "Expert Team", desc: "Experienced developers skilled in latest technologies" },
  { title: "24/7 Support", desc: "Round-the-clock maintenance and technical support" },
  { title: "Cost-Effective", desc: "Optimized development processes to maximize ROI" },
  { title: "Quality Assurance", desc: "Rigorous testing ensuring bug-free delivery" },
  { title: "Agile Development", desc: "Iterative approach with continuous feedback" },
];

const EnterpriseApplicationDevelopment = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Enterprise Application Development
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Build scalable, secure, and high-performance enterprise applications that drive business growth and operational efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-white">
              <span>Start Your Project</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="#features" className="btn-outline">
              <span>Explore Features</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-white" id="features">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our Capabilities</h2>
          <p className="section-subtitle">
            Comprehensive enterprise development services designed to meet your unique business requirements
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

      {/* Benefits Section */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            Partner with experts who understand enterprise-grade development
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <i className="fas fa-check-circle text-2xl text-success flex-shrink-0"></i>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section section-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Technologies We Work With</h2>
          <p className="section-subtitle">
            Modern tech stack for enterprise application development
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="feature-card">
                <i className={`${tech.icon} feature-card-icon`}></i>
                <h3 className="text-lg font-bold mb-2 text-foreground">{tech.name}</h3>
                <p className="text-muted-foreground text-sm">{tech.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Build Your Enterprise Application?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss your project requirements and create a solution that drives your business forward
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

export default EnterpriseApplicationDevelopment;
