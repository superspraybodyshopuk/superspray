
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, ArrowRight } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Car Body Repairs",
      description: "From minor scratches to major collision damage, our skilled technicians restore your vehicle to its pre-accident condition.",
      icon: "🔧",
    },
    {
      title: "Classic Car Restoration",
      description: "Revive the glory of your classic vehicle with our comprehensive restoration services tailored for vintage automobiles.",
      icon: "🚗",
    },
    {
      title: "Paint Services",
      description: "Our cutting-edge spray booth delivers flawless finishes with color matching services that ensure seamless repairs.",
      icon: "🎨",
    },
    {
      title: "Wheel Repairs",
      description: "We fix damaged alloy wheels, restoring them to their original condition with expert craftsmanship.",
      icon: "⚙️",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      vehicle: "Jaguar E-Type",
      testimonial: "The restoration work SuperSpray did on my E-Type was exceptional. Their attention to detail and craftsmanship is unmatched.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      vehicle: "BMW 3 Series",
      testimonial: "After a nasty accident, I thought my car was beyond saving. SuperSpray worked magic and it looks brand new again.",
      rating: 5,
    },
    {
      name: "Michael Davies",
      vehicle: "Ford Mustang",
      testimonial: "The team's passion for classic cars is evident in their work. My Mustang has never looked better.",
      rating: 5,
    },
  ];

  const benefits = [
    "Free no-obligation quotes",
    "Fully insured work",
    "Genuine OEM parts used",
    "Limited lifetime warranty on paint",
    "Courtesy cars available",
    "Collection and delivery service",
  ];

  return (
    <>
      <Hero
        title="High Quality Bodywork Repairs & Restoration"
        subtitle="Bringing classic and modern vehicles back to their former glory with expert craftsmanship and attention to detail."
        showButtons={true}
        isHomepage={true}
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Our Services</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              From minor repairs to full restorations, our expert team provides comprehensive bodywork services for all vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="heading-3 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="link" className="p-0">
                    <Link to="/contact" className="flex items-center text-brand-blue">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About/History Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-brand-dark mb-4">Craftsmanship with Over 25 Years Experience</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1998, SuperSpray BodyShop has built a reputation for excellence in the automotive restoration industry. Our team of skilled technicians combines traditional craftsmanship with modern techniques to deliver exceptional results.
              </p>
              <p className="text-gray-600 mb-6">
                We take pride in our attention to detail and commitment to quality, ensuring that every vehicle that leaves our workshop meets our high standards.
              </p>
              <Button asChild className="bg-brand-blue hover:bg-opacity-80">
                <Link to="/about">More About Us</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1562604790-8b8d92bf6b1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="SuperSpray BodyShop workshop" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose SuperSpray BodyShop?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              We're committed to providing the highest quality service and results for your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-white rounded-full p-2 mr-4">
                  <Check className="h-5 w-5 text-brand-blue" />
                </div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">What Our Customers Say</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Don't just take our word for it. See what our customers have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-brand-dark hover:bg-opacity-80">
              <Link to="/reviews">View All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Transform Your Vehicle?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let us help you bring your car back to its former glory.
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-opacity-80">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
