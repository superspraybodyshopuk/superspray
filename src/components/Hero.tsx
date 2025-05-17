import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
  isHomepage?: boolean;
}

const Hero = ({ title, subtitle, showButtons = false, isHomepage = false }: HeroProps) => {
  return (
    <div className={`hero-section ${isHomepage ? 'h-screen min-h-[600px]' : 'h-[40vh] min-h-[300px]'} flex items-center`}>
      <div className="container-custom">
        <div className="max-w-3xl text-white">
          <h1 className="heading-1 mb-4 text-shadow">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">{subtitle}</p>
          
          {showButtons && (
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-opacity-80 text-white font-semibold">
                <Link to="/contact">
                  Get a Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-brand-dark hover:bg-white hover:text-brand-dark font-semibold border-2">
                <Link to="/gallery">
                  View Our Work
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
