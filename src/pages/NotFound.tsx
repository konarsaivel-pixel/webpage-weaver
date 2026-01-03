import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="hero-section min-h-[60vh] flex items-center justify-center text-center">
        <div className="relative z-10">
          <h1 className="text-8xl md:text-9xl font-extrabold mb-4 opacity-50">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-white">
            <span>Back to Home</span>
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
