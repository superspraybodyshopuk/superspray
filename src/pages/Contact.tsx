import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !service || !message) {
      toast({
        title: "Error",
        description: "Please complete all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // In a real implementation, this would submit to Supabase
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll be in touch shortly.",
    });

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
    setLoading(false);
  };

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We're Here to Help. Reach out to SuperSpray BodyShop to discuss your requirements and discover our commitment to quality without compromise."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-2 text-brand-dark mb-6">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Your full name" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      placeholder="Your phone number" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="service">Service Required *</Label>
                  <Select 
                    onValueChange={setService}
                    value={service}
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repair">Accident Repair</SelectItem>
                      <SelectItem value="restoration">Classic Car Restoration</SelectItem>
                      <SelectItem value="paint">Paint & Refinishing</SelectItem>
                      <SelectItem value="wheel">Wheel Repair</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Please provide details about your vehicle and the service required" 
                    className="min-h-[150px]"
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-opacity-80"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="heading-2 text-brand-dark mb-6">Contact Information</h2>
              
              <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Phone className="h-6 w-6 text-brand-blue mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <a href="tel:+447548216937" className="hover:text-brand-blue underline focus:outline-none">+44 7548 216 937</a>
                      <p className="text-sm text-gray-500 mt-1">Call us during opening hours</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p>info@superspraybodyshop.co.uk</p>
                      <p className="text-sm text-gray-500 mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Address</h3>
                      <p>Unit 1, Goddard Farm, Goddards Ln, Sherfield on Loddon, Hook RG27 0EL</p>
                      <p className="text-sm text-gray-500 mt-1">Free parking available</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 mr-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                      <p>Monday - Friday: 8:30 am - 5:00 pm</p>
                      <p>Saturday: 8:30 am - 12:00 am</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map - now full width below contact section */}
      <section className="bg-gray-200 py-8">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-md h-[300px] bg-gray-200 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.8792227330546!2d-1.0411481237263214!3d51.31334632486157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487420cd0f4f30cb%3A0xf13aa2ce33fee83!2sSuperSpray%20BodyShop%20Ltd!5e0!3m2!1sen!2suk!4v1748032169467!5m2!1sen!2suk"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="SuperSpray BodyShop Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Find answers to our most commonly asked questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">What types of vehicles do you handle at your Berkshire bodyshop?</h3>
                <p className="text-gray-600">We offer our top-quality repair and restoration services for <b>all classic and modern cars</b>. Whether you have a vintage model needing meticulous restoration or a contemporary car requiring collision repair, our skilled team is equipped to handle it.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Do you handle fiberglass repairs at your bodyshop?</h3>
                <p className="text-gray-600">Yes, alongside our comprehensive metal bodywork services, we also offer <b>Fiber glass repair</b>. Our specialists are experienced in handling the unique requirements of fiberglass, ensuring a high-quality and durable repair for your vehicle.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">How do you ensure a flawless finish for expert car paintwork?</h3>
                <p className="text-gray-600">We guarantee a <b>flawless, durable finish</b> by using a combination of technology and expertise. All paintwork is done in our <b>state-of-the-art heated spray booth</b>, which ensures finishes are applied to the <b>highest possible standards</b>. We use only the <b>highest quality materials</b> and employ the <b>latest techniques</b>, executed by our <b>Highly skilled technicians</b>.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Can you repair significant collision damage?</h3>
                <p className="text-gray-600">Absolutely. Our <b>Collision Damage Repairs</b> service covers everything <b>from minor dings to significant dents</b>. Our goal is to <b>restore your vehicle’s bodywork to its original condition</b>. Every repair is performed with <b>unmatched attention to detail</b> to ensure a perfect result.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Do you offer alloy wheel refurbishment?</h3>
                <p className="text-gray-600">Yes, we provide an <b>Alloy Wheel Refurbishment</b> service. We can address issues like <b>curb damage, corrosion, and scratches</b>, refinishing your wheels with <b>high-quality coatings for a like-new look</b>. This service <b>improves both the appearance and longevity of your wheels</b>.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Can you precisely match my car's existing paint colour?</h3>
                <p className="text-gray-600">Our <b>Expertly-trained technicians</b> focus on achieving the best possible results for your vehicle. During our consultation process, we will <b>inspect the car together [with you] to identify the work needed</b> and <b>determine the type of paint and finish that will best suit your vehicle</b>. By using <b>the highest quality materials</b> and our <b>dedicated modern spraybooth</b>, we aim for a <b>smooth, flawless finish</b> that seamlessly integrates with your car's appearance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">How long does a typical repair or respray take?</h3>
                <p className="text-gray-600">The timeframe for any vehicle restoration or repair project varies depending on the complexity of the work involved and the specific services required. We believe in <b>delivering quality without compromise</b>, which sometimes requires meticulous attention and time. For an accurate estimate based on your vehicle's specific needs, we recommend contacting us directly to discuss your project or scheduling a consultation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
