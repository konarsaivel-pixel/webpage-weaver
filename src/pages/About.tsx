import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const values = [
  { icon: "fas fa-lightbulb", title: "Innovation", desc: "Constantly pushing boundaries with cutting-edge solutions" },
  { icon: "fas fa-handshake", title: "Integrity", desc: "Building trust through transparent and ethical practices" },
  { icon: "fas fa-users", title: "Collaboration", desc: "Working together to achieve exceptional results" },
  { icon: "fas fa-award", title: "Excellence", desc: "Delivering quality in everything we do" },
];

const milestones = [
  { year: "2014", event: "Company Founded", desc: "Started with a vision to transform businesses with technology" },
  { year: "2017", event: "100+ Clients", desc: "Reached milestone of serving 100+ enterprises globally" },
  { year: "2020", event: "AI Division Launch", desc: "Expanded into AI and Machine Learning solutions" },
  { year: "2023", event: "Global Expansion", desc: "Opened offices in multiple countries" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            About Solugenious
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            We are a leading technology company dedicated to helping businesses transform and thrive in the digital age through innovative AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Solugenious AI Services Technology, we are committed to empowering businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We combine deep technical expertise with industry knowledge to deliver transformative solutions that help our clients succeed in an ever-evolving digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted rounded-2xl">
                  <h3 className="text-3xl font-bold gradient-text mb-1">500+</h3>
                  <p className="text-muted-foreground text-sm">Projects Delivered</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-2xl">
                  <h3 className="text-3xl font-bold gradient-text mb-1">150+</h3>
                  <p className="text-muted-foreground text-sm">Global Clients</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-glow rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                To be the most trusted technology partner for enterprises worldwide, driving digital transformation through innovation and excellence.
              </p>
              <ul className="space-y-3">
                {["Customer Success", "Continuous Innovation", "Global Impact", "Sustainable Growth"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="feature-card">
                <i className={`${value.icon} feature-card-icon`}></i>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section section-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            Key milestones in our growth story
          </p>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold gradient-text">{milestone.year}</span>
                </div>
                <div className="relative flex-1 pb-8 border-l-2 border-primary/30 pl-6">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-primary-glow -translate-x-[9px]"></div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{milestone.event}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-white">
              <span>Get In Touch</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/careers" className="btn-outline">
              <span>Join Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
