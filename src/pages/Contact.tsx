
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
        subtitle="Reach out to discuss your project or book an appointment"
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
                    <Phone className="h-6 w-6 mr-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p>+44 1234 567890</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri: 9am - 5pm</p>
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
                      <p>123 Car Street</p>
                      <p>Automotown</p>
                      <p>AU1 2BC</p>
                      <p className="text-sm text-gray-500 mt-1">Free parking available</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 mr-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                      <p>Monday - Friday: 9am - 5pm</p>
                      <p>Saturday: 9am - 12pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-[300px] bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-bold text-lg mb-2">Interactive Map</h3>
                  <p className="text-gray-600">Map integration would appear here</p>
                </div>
              </div>
            </div>
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
                <h3 className="font-bold text-lg mb-2">Do you provide free estimates?</h3>
                <p className="text-gray-600">Yes, we offer free no-obligation quotes for all repair and restoration work. You can bring your vehicle to our workshop or send photos for an initial assessment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">How long does a typical repair take?</h3>
                <p className="text-gray-600">Minor repairs can be completed within 1-3 days. More extensive damage may take 1-2 weeks. Full restorations typically take several months depending on the project scope.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Do you work with insurance companies?</h3>
                <p className="text-gray-600">Yes, we work with all major insurance companies and can help manage your claim process from start to finish.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Is there a warranty on your work?</h3>
                <p className="text-gray-600">Yes, we offer a limited lifetime warranty on our paintwork and a 12-month warranty on all repairs, subject to our terms and conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
