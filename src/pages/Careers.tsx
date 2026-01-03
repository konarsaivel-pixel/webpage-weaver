import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const openings = [
  { role: "Senior Java Developer", location: "Mumbai", type: "Full-time", experience: "5+ years" },
  { role: "React Frontend Developer", location: "Remote", type: "Full-time", experience: "3+ years" },
  { role: "Data Scientist", location: "Bangalore", type: "Full-time", experience: "4+ years" },
  { role: "DevOps Engineer", location: "Mumbai", type: "Full-time", experience: "3+ years" },
  { role: "Cybersecurity Analyst", location: "Mumbai", type: "Full-time", experience: "2+ years" },
  { role: "Business Analyst", location: "Remote", type: "Full-time", experience: "3+ years" },
];

const perks = [
  { icon: "fas fa-laptop-house", title: "Remote Work", desc: "Flexible work-from-home options" },
  { icon: "fas fa-graduation-cap", title: "Learning", desc: "Continuous learning opportunities" },
  { icon: "fas fa-heart", title: "Health Benefits", desc: "Comprehensive health insurance" },
  { icon: "fas fa-users", title: "Team Events", desc: "Regular team outings and events" },
  { icon: "fas fa-chart-line", title: "Growth", desc: "Clear career progression paths" },
  { icon: "fas fa-gift", title: "Bonuses", desc: "Performance-based rewards" },
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Be part of an innovative team that's shaping the future of technology. We're always looking for talented individuals who are passionate about making a difference.
          </p>
          <a href="#openings" className="btn-white">
            <span>View Open Positions</span>
            <i className="fas fa-arrow-down"></i>
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section section-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Why Join Solugenious?</h2>
          <p className="section-subtitle">
            We offer more than just a job – we offer a career with purpose
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="feature-card">
                <i className={`${perk.icon} feature-card-icon`}></i>
                <h3 className="text-xl font-bold mb-3 text-foreground">{perk.title}</h3>
                <p className="text-muted-foreground">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section section-light" id="openings">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">
            Find your next opportunity with us
          </p>
          
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{job.role}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <i className="fas fa-map-marker-alt text-primary"></i>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <i className="fas fa-clock text-primary"></i>
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <i className="fas fa-briefcase text-primary"></i>
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <Link 
                    to="/register" 
                    className="btn-primary py-2.5 px-6 text-sm"
                  >
                    Apply Now
                  </Link>
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
            Don't See a Fit?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a href="mailto:careers@solugeniousaitechs.com" className="btn-white">
            <span>Send Your Resume</span>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
