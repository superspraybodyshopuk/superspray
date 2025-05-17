import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import DashboardLayout from "./components/DashboardLayout";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
