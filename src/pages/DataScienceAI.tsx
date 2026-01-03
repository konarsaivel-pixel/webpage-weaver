import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: "fas fa-brain",
    title: "Machine Learning",
    description: "Custom ML models for prediction, classification, and pattern recognition"
  },
  {
    icon: "fas fa-chart-bar",
    title: "Data Analytics",
    description: "Transform raw data into actionable business insights"
  },
  {
    icon: "fas fa-robot",
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered applications"
  },
  {
    icon: "fas fa-comments",
    title: "NLP & Chatbots",
    description: "Natural language processing and conversational AI"
  },
  {
    icon: "fas fa-eye",
    title: "Computer Vision",
    description: "Image and video analysis for various applications"
  },
  {
    icon: "fas fa-project-diagram",
    title: "Deep Learning",
    description: "Neural networks for complex pattern recognition"
  },
];

const technologies = [
  { icon: "fab fa-python", name: "Python", desc: "TensorFlow, PyTorch, Scikit-learn" },
  { icon: "fas fa-database", name: "Big Data", desc: "Spark, Hadoop, Kafka" },
  { icon: "fas fa-cloud", name: "Cloud AI", desc: "AWS SageMaker, Azure ML, GCP AI" },
  { icon: "fas fa-chart-pie", name: "Visualization", desc: "Tableau, Power BI, D3.js" },
];

const useCases = [
  "Predictive Maintenance",
  "Customer Churn Prediction",
  "Fraud Detection",
  "Demand Forecasting",
  "Sentiment Analysis",
  "Recommendation Systems",
  "Image Classification",
  "Document Processing",
];

const DataScienceAI = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
            <i className="fas fa-brain text-sm"></i>
            <span className="text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Data Science & AI
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Unlock the power of your data with advanced analytics, machine learning, and artificial intelligence solutions that drive business transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-white">
              <span>Start Your AI Journey</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="#services" className="btn-outline">
              <span>Explore Services</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-white" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">AI & Data Science Services</h2>
          <p className="section-subtitle">
            End-to-end data science solutions from strategy to deployment
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

      {/* Technologies Section */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Technologies We Use</h2>
          <p className="section-subtitle">
            Industry-leading tools and frameworks for AI solutions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="feature-card">
                <i className={`${tech.icon} feature-card-icon`}></i>
                <h3 className="text-lg font-bold mb-2 text-foreground">{tech.name}</h3>
                <p className="text-muted-foreground text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section section-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Use Cases</h2>
          <p className="section-subtitle">
            Real-world applications of our AI solutions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="benefit-item">
                <i className="fas fa-check-circle text-xl text-success flex-shrink-0"></i>
                <span className="font-medium text-foreground">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our AI Development Process</h2>
          <p className="section-subtitle">
            Structured approach to AI solution delivery
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understand your data and business objectives" },
              { step: "02", title: "Data Prep", desc: "Clean, transform, and prepare data for modeling" },
              { step: "03", title: "Model Dev", desc: "Build and train machine learning models" },
              { step: "04", title: "Deployment", desc: "Deploy and monitor models in production" },
            ].map((phase, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss how AI can transform your business operations and drive growth
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

export default DataScienceAI;
