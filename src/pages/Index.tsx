import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, ArrowRight } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Collision Damage Repairs",
      description: "We expertly tackle everything from minor dings to significant dents. Our team restores your vehicle's bodywork to its original condition with unmatched attention to detail.",
      icon: "🔧",
    },
    {
      title: "Specialist Paintwork",
      description: "For those seeking a truly unique touch, our Specialist Paintwork service offers bespoke paintwork services tailored to your vision. We deliver stunning and long-lasting results that will make your vehicle stand out.",
      icon: "🎨",
    },
    {
      title: "Classic Car Restoration",
      description: "We provide top-quality repairs and complete restoration services for all classic cars. Our classic car restoration Berkshire team combines a passion for precision with meticulous care, safeguarding the aesthetics and value of your cherished vehicle.",
      icon: "🚗",
    },
    {
      title: "Alloy Wheel Refurbishment",
      description: "Restore your alloy wheels to their original glory with our dedicated refurbishment service. We address curb damage, corrosion, and scratches, refinishing them with high-quality coatings for a like-new look.",
      icon: "⚙️",
    },
    {
      title: "Fiberglass Repair",
      description: "Our expertise also includes professional fiberglass repair. We skillfully address damage to fiberglass components, ensuring structural integrity and a smooth finish ready for perfect paintwork.",
      icon: "🛠️",
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
        title="SuperSpray BodyShop: Masters of Automotive Craftsmanship"
        subtitle="Experience exceptional restoration, flawless finishes, and our unwavering commitment to quality without compromise—each and every time."
        showButtons={true}
        isHomepage={true}
      />

      {/* Our Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-brand-dark mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* First Row: 3 columns */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start h-full border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-brand-blue">
              <div className="bg-red-100 rounded-full p-3 mb-4">
                {/* Collision icon: car crash */}
                <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" /><path d="M7 13l2-2m6 2l-2-2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-brand-blue">Collision Damage Repairs</h3>
              <p className="text-gray-700 mb-2">We expertly tackle everything from <span className="font-semibold text-brand-blue/80">"minor dings to significant dents"</span>. Our team restores your vehicle's bodywork to its <span className="font-semibold text-brand-blue/80">"original condition"</span> with <span className="font-semibold text-brand-blue/80">"unmatched attention to detail"</span>.</p>
            </div>
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start h-full border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-brand-blue">
              <div className="bg-yellow-100 rounded-full p-3 mb-4">
                {/* Paint icon: paint brush */}
                <svg className="h-8 w-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 11l-6-6-7 7 6 6 7-7z" /><path d="M14 7l3 3" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-brand-blue">Specialist Paintwork</h3>
              <p className="text-gray-700 mb-2">For those seeking a truly <span className="font-semibold text-brand-blue/80">"unique touch"</span>, our Specialist Paintwork service offers <span className="font-semibold text-brand-blue/80">"bespoke paintwork services"</span> tailored to your vision. We deliver <span className="font-semibold text-brand-blue/80">"stunning and long-lasting result[s]"</span> that will make your vehicle stand out.</p>
            </div>
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start h-full border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-brand-blue">
              <div className="bg-green-100 rounded-full p-3 mb-4">
                {/* Classic car icon: classic car silhouette */}
                <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="5" rx="2" /><path d="M5 16v2a2 2 0 002 2h10a2 2 0 002-2v-2" /><circle cx="7.5" cy="16.5" r="1.5" /><circle cx="16.5" cy="16.5" r="1.5" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-brand-blue">Classic Car Restoration</h3>
              <p className="text-gray-700 mb-2">We provide <span className="font-semibold text-brand-blue/80">"top-quality repairs"</span> and <span className="font-semibold text-brand-blue/80">"complete restoration"</span> services for <span className="font-semibold text-brand-blue/80">"all classic... cars"</span>. Our <span className="font-semibold text-brand-blue/80">"classic car restoration Berkshire"</span> team combines a <span className="font-semibold text-brand-blue/80">"passion for precision"</span> with meticulous care, safeguarding the aesthetics and value of your cherished vehicle.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Second Row: 2 columns */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start h-full border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-brand-blue">
              <div className="bg-blue-100 rounded-full p-3 mb-4">
                {/* Alloy wheel icon: wheel */}
                <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2" /><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-brand-blue">Alloy Wheel Refurbishment</h3>
              <p className="text-gray-700 mb-2"><span className="font-semibold text-brand-blue/80">"Restore your alloy wheels to their original glory"</span> with our dedicated refurbishment service. We address <span className="font-semibold text-brand-blue/80">"curb damage, corrosion, and scratches"</span>, refinishing them <span className="font-semibold text-brand-blue/80">"with high-quality coatings for a like-new look"</span>.</p>
            </div>
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start h-full border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-brand-blue">
              <div className="bg-purple-100 rounded-full p-3 mb-4">
                {/* Fiberglass icon: layers */}
                <svg className="h-8 w-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l10 5-10 5-10-5 10-5zm0 10l10 5-10 5-10-5 10-5z" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-brand-blue">Fiberglass Repair</h3>
              <p className="text-gray-700 mb-2">Our expertise also includes professional <span className="font-semibold text-brand-blue/80">"Fiber glass repair"</span>. We skillfully address damage to fiberglass components, ensuring structural integrity and a smooth finish ready for perfect paintwork.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="/services" className="inline-block px-8 py-3 rounded-full bg-brand-blue text-white font-semibold shadow-lg hover:bg-brand-dark transition-colors text-lg">See All Services</a>
          </div>
        </div>
      </section>

      {/* Craftsmanship/Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="heading-2 text-brand-blue mb-6">A Passion for Preservation: Expert Classic Car Restoration</h2>
            <p className="text-lg text-gray-700 mb-6">
              At SuperSpray BodyShop, we understand that a classic car is more than just a car—it’s a statement and a cherished investment. For over 28 years, our CEO Jose Manuel's passion for precision and dedication to excellence in vehicle restoration have been the driving force behind our renowned classic car restoration Berkshire services. Our highly skilled technicians approach each project with the utmost care, whether it's intricate body repairs or a complete restoration, always focused on safeguarding the aesthetics and value of your vehicle.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We meticulously blend time-honored craftsmanship with cutting-edge technology, including our state-of-the-art heated spray booth, to achieve historically accurate and flawless, durable finishes. Our unwavering commitment is to delivering quality without compromise—each and every time, ensuring your classic is returned to its best condition, ready to be admired for generations.
            </p>
            <a href="/about" className="inline-block px-8 py-3 rounded-full bg-brand-blue text-white font-semibold shadow-lg hover:bg-brand-dark transition-colors text-lg">More About Us</a>
          </div>
          {/* Image Content */}
          <div className="flex-1 flex justify-center">
            {/* Replace src with your chosen image path */}
            <img src="/classic car homepage.png" alt="Classic Car Restoration" className="rounded-2xl shadow-xl max-w-full h-auto object-cover w-[400px] md:w-[450px] lg:w-[500px]" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-brand-blue">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="heading-2 text-white mb-4 text-center">Why Choose SuperSpray BodyShop?</h2>
          <p className="text-lg text-blue-100 mb-10 text-center">
            We are committed to providing exceptional vehicle restoration and repair services. Here’s why customers trust SuperSpray:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-0">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-brand-blue/10 text-brand-blue rounded-full p-4 mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Uncompromising Quality</h3>
              <p>We firmly believe in delivering quality without compromise—each and every time.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 15l4-4 4 4" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Skilled Technicians</h3>
              <p>Our highly skilled technicians are passionate about their work and take great pride in their craft.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-yellow-100 text-yellow-600 rounded-full p-4 mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" /><path d="M7 7V5a5 5 0 0110 0v2" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Advanced Heated Spray Booth</h3>
              <p>All paintwork is completed in our state-of-the-art heated spray booth for optimal results.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-pink-100 text-pink-600 rounded-full p-4 mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Flawless, Durable Finishes</h3>
              <p>Our processes and technology ensure a flawless, durable finish, maintaining the integrity and aesthetics of your vehicle.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-purple-100 text-purple-600 rounded-full p-4 mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0l-3 3m3-3l3 3" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Meticulous Attention to Detail</h3>
              <p>We deliver unparalleled workmanship and attention to detail in every project we undertake.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="5" rx="2" /><circle cx="7.5" cy="16.5" r="1.5" /><circle cx="16.5" cy="16.5" r="1.5" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">For All Vehicles</h3>
              <p>We offer top-quality repairs for all classic and modern cars, treating each with the utmost care.</p>
            </div>
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
            <Button asChild className="bg-brand-dark hover:bg-opacity-80 text-white font-semibold">
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
          <Button asChild size="lg" className="bg-brand-blue hover:bg-opacity-80 text-white font-semibold">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
