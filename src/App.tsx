import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EnterpriseApplicationDevelopment from "./pages/EnterpriseApplicationDevelopment";
import LiferayDXP from "./pages/LiferayDXP";
import Outsourcing from "./pages/Outsourcing";
import Cybersecurity from "./pages/Cybersecurity";
import DataScienceAI from "./pages/DataScienceAI";
import Careers from "./pages/Careers";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enterprise-application-development" element={<EnterpriseApplicationDevelopment />} />
          <Route path="/liferay-dxp" element={<LiferayDXP />} />
          <Route path="/outsourcing" element={<Outsourcing />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/data-science-ai" element={<DataScienceAI />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
