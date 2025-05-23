import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { User, Award, Clock, Wrench } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every project, large or small.",
      icon: Award,
    },
    {
      title: "Integrity",
      description: "Honest pricing and transparent communication with all customers.",
      icon: User,
    },
    {
      title: "Reliability",
      description: "We deliver on our promises with on-time completion of projects.",
      icon: Clock,
    },
    {
      title: "Expertise",
      description: "Continuous training ensures our team uses the latest techniques.",
      icon: Wrench,
    },
  ];

  const team = [
    {
      name: "Robert Johnson",
      position: "Founder & Master Technician",
      bio: "With over 30 years in the industry, Robert's passion for classic cars led him to establish SuperSpray in 1998.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Emily Thompson",
      position: "Paint Specialist",
      bio: "Emily's eye for color matching and flawless finishes has earned her a reputation for excellence in the industry.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      name: "David Wilson",
      position: "Classic Car Restoration Expert",
      bio: "David specializes in bringing vintage vehicles back to life with meticulous attention to historical accuracy.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <>
      <Hero
        title="About SuperSpray"
        subtitle="Excellence in automotive restoration, delivering unparalleled workmanship and quality without compromise."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-brand-dark mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                SuperSpray BodyShop was established with a clear vision: to be a leading destination for expert car restoration and quality vehicle paintwork in Berkshire. Our journey began with an unwavering commitment to delivering superior results, driven by a passion for automotive excellence that permeates every aspect of our work. From our earliest days, the core of SuperSpray BodyShop's history has been built on the principle of "quality without compromise—each and every time," a philosophy that guides our highly skilled technicians in every project.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that a vehicle is more than just transportation; it’s an investment and often a prized possession. That's why SuperSpray BodyShop has always focused on precision and excellence, ensuring that from minor repairs to complete resprays, every vehicle receives the meticulous care it deserves. Our growth into a trusted name around Burghfield Common and the wider Reading area stems from this dedication. As a team of experienced car technicians in Berkshire, we've consistently invested in honing our skills and utilising advanced techniques to restore vehicles to their optimal condition.
              </p>
              <p className="text-gray-600">
                Choosing SuperSpray BodyShop means entrusting your vehicle to a facility built on a foundation of delivering outstanding craftsmanship and ensuring your complete satisfaction with a flawless finish.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1470&q=80" 
                alt="SuperSpray BodyShop workshop" 
                className="w-full h-[400px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Our Values</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              The core principles that guide everything we do at SuperSpray BodyShop, ensuring your vehicle receives the exceptional care and attention it deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Excellence Card */}
            <Card className="group hover:shadow-2xl transition-shadow border-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl">
              <CardContent className="p-8 flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3 md:flex-col md:items-start md:gap-6">
                  <span className="flex-shrink-0 flex justify-center md:justify-start w-auto md:w-auto">
                    {/* SVG Icon: Trophy/Star for Excellence */}
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="#2563eb"/>
                      <path d="M24 14l3.09 6.26L34 21.27l-5 4.87L30.18 34 24 29.77 17.82 34 19 26.14l-5-4.87 6.91-1.01L24 14z" fill="#fff"/>
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-blue-800 mb-0">Excellence</h3>
                </div>
                <div className="h-2" />
                <p className="text-gray-700">
                  We are driven by a commitment to achieve perfection in every task we undertake, regardless of its scale. This means consistently aiming for superior results that not only meet but exceed your expectations for quality and finish. "Precision and excellence" are the cornerstones of our operations.
                </p>
              </CardContent>
            </Card>
            {/* Integrity Card */}
            <Card className="group hover:shadow-2xl transition-shadow border-0 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl">
              <CardContent className="p-8 flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3 md:flex-col md:items-start md:gap-6">
                  <span className="flex-shrink-0 flex justify-center md:justify-start w-auto md:w-auto">
                    {/* SVG Icon: Handshake for Integrity */}
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="#f59e42"/>
                      <path d="M16 28l8 8 8-8M16 20l8 8 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-amber-800 mb-0">Integrity</h3>
                </div>
                <div className="h-2" />
                <p className="text-gray-700">
                  Building and maintaining your trust is fundamental to our approach. We achieve this through dedicated care for your vehicle, transparent communication throughout the repair process, and an unwavering focus on delivering the highest quality workmanship. We believe in honest assessments and ensuring you are fully informed about the work needed to achieve your desired results.
                </p>
              </CardContent>
            </Card>
            {/* Reliability Card */}
            <Card className="group hover:shadow-2xl transition-shadow border-0 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl">
              <CardContent className="p-8 flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3 md:flex-col md:items-start md:gap-6">
                  <span className="flex-shrink-0 flex justify-center md:justify-start w-auto md:w-auto">
                    {/* SVG Icon: Shield/Check for Reliability */}
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="#22c55e"/>
                      <path d="M34 18l-10 10-4-4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-green-800 mb-0">Reliability</h3>
                </div>
                <div className="h-2" />
                <p className="text-gray-700">
                  Our promise is to deliver "quality without compromise—each and every time." You can rely on SuperSpray BodyShop for consistently flawless and durable finishes, whether it's a minor repair or a complete respray. We stand by the lasting quality of our work, ensuring your vehicle looks its best long after it leaves our workshop.
                </p>
              </CardContent>
            </Card>
            {/* Expertise Card */}
            <Card className="group hover:shadow-2xl transition-shadow border-0 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl">
              <CardContent className="p-8 flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3 md:flex-col md:items-start md:gap-6">
                  <span className="flex-shrink-0 flex justify-center md:justify-start w-auto md:w-auto">
                    {/* SVG Icon: Lightbulb/Gear for Expertise */}
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="#a21caf"/>
                      <path d="M24 16v8l6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-purple-800 mb-0">Expertise</h3>
                </div>
                <div className="h-2" />
                <p className="text-gray-700">
                  With over 28 years of leadership experience in the automotive repair and restoration industry, coupled with our team of highly skilled technicians and experienced professionals, we bring a wealth of knowledge to every project. We are committed to using the latest techniques and cutting-edge technology to ensure your vehicle benefits from the most advanced and effective treatments available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Our Facilities</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Our workshop is equipped with cutting-edge technology and high-quality materials to deliver exceptional vehicle restoration and repair results. We are committed to maintaining a professional environment where precision and quality are paramount in every service we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Spray Booth */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <img 
                src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Heated Spray Booth" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-blue-800 mb-2">State-of-the-Art Heated Spray Booth</h3>
                <p className="text-gray-700">Our facility features a state-of-the-art heated spray booth. This advanced equipment is crucial for achieving a flawless, durable finish for all paintwork, whether it's a minor touch-up or a complete respray. It ensures that all paint finishes are applied to the highest possible standards in a controlled environment, safeguarding the integrity and aesthetics of your vehicle. Your vehicle will be sprayed in this dedicated modern spraybooth.</p>
              </div>
            </div>
            {/* Precision Repair */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-white">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Precision Repair and Painting" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-green-800 mb-2">Precision Repair and Painting Environment</h3>
                <p className="text-gray-700">We utilize the latest techniques for services like complete resprays to achieve a smooth, flawless finish. Our expertly-trained technicians conduct thorough inspections, working with you to identify the work needed and determine the best paint and finish for your vehicle. We use only the highest quality materials for all painting and repair work, ensuring a lasting and superior outcome. This commitment to quality materials and expert application means we can confidently restore your vehicle’s bodywork to its original condition.</p>
              </div>
            </div>
            {/* Restoration Bays */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-50 to-white">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80" 
                alt="Restoration and Repair Bays" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-purple-800 mb-2">Comprehensive Restoration and Repair Bays</h3>
                <p className="text-gray-700">Our workshop is equipped to handle a wide range of projects, offering top-quality repairs for all classic and modern cars. We manage everything from minor dings to significant dents and from small repairs to complete restoration projects. Our specialists are experienced professionals who handle each and every project with the utmost care, ensuring your vehicle is restored with precision. We also have the capability for fiber glass repair.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Meet Our Team</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Our skilled professionals bring decades of combined experience to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center max-w-xs mx-auto"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-brand-blue font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Certifications</h2>
            <p className="text-lg max-w-2xl mx-auto">
              We maintain the highest standards through continuous training and certification.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="bg-white p-6 rounded-lg flex items-center justify-center">
              <span className="text-brand-dark text-xl font-bold">ASE Certified</span>
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center">
              <span className="text-brand-dark text-xl font-bold">I-CAR Gold</span>
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center">
              <span className="text-brand-dark text-xl font-bold">PPG Certified</span>
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center">
              <span className="text-brand-dark text-xl font-bold">FBRS Approved</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
