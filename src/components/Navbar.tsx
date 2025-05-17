import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 bg-white shadow-md py-2`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-10">
          <img 
            src="/lovable-uploads/4f0f7dc4-e69c-42fb-9a05-7fc6cee81beb.png" 
            alt="SuperSpray BodyShop Logo" 
            className="h-10 md:h-12 transition-all duration-300"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-colors hover:text-brand-blue ${
                location.pathname === link.href 
                  ? "text-brand-blue" 
                  : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </Button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay below navbar, but menu content below navbar as well */}
            <div className="md:hidden fixed inset-0 bg-white z-20" aria-hidden="true"></div>
            <div className="md:hidden fixed left-0 right-0 top-16 bottom-0 bg-white z-30 flex flex-col items-center animate-fade-in">
              <button
                className="fixed top-5 right-5 z-40 text-gray-800 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
              <nav className="flex flex-col space-y-8 items-center mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-xl font-medium text-gray-900 hover:text-brand-blue transition-colors ${
                      location.pathname === link.href ? "text-brand-blue" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
