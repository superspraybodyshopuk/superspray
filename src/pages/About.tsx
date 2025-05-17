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
        subtitle="Excellence in automotive restoration since 1998"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-brand-dark mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1998 by Robert Johnson, SuperSpray BodyShop began as a small garage with a big vision: to provide the highest quality bodywork repairs and restorations for classic and modern vehicles alike.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past 25 years, we've grown from a two-person operation to a team of skilled technicians, each bringing specialized expertise to our comprehensive range of services.
              </p>
              <p className="text-gray-600">
                Throughout our growth, we've maintained our commitment to quality craftsmanship, attention to detail, and exceptional customer service. Today, we're proud to be recognized as one of the leading automotive bodywork specialists in the region.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1562142953-88e7e153eb0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
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
              The core principles that guide everything we do at SuperSpray BodyShop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto bg-brand-blue rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Our Facilities</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Our state-of-the-art workshop is equipped with the latest technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Modern spray booth" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Modern Spray Booths</h3>
                <p className="text-gray-600">Our climate-controlled spray booths ensure flawless finishes every time.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Diagnostic equipment" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Advanced Diagnostics</h3>
                <p className="text-gray-600">Computerized systems for precise color matching and damage assessment.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1602705847215-1867a52f58e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                alt="Welding equipment" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Restoration Workshop</h3>
                <p className="text-gray-600">Specialized tools and equipment for authentic classic car restorations.</p>
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
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
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
