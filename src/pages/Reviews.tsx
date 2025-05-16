
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface Review {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  reviewText: string;
  date: string;
}

// Sample review data - this would come from Supabase in the real implementation
const sampleReviews: Review[] = [
  {
    id: "1",
    name: "John Smith",
    vehicle: "Jaguar E-Type",
    rating: 5,
    reviewText: "The restoration work SuperSpray did on my E-Type was exceptional. Their attention to detail and craftsmanship is unmatched. I couldn't be happier with the results.",
    date: "2023-10-15"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    vehicle: "BMW 3 Series",
    rating: 5,
    reviewText: "After a nasty accident, I thought my car was beyond saving. SuperSpray worked magic and it looks brand new again. The team was professional, kept me updated throughout the process, and delivered ahead of schedule.",
    date: "2023-09-28"
  },
  {
    id: "3",
    name: "Michael Davies",
    vehicle: "Ford Mustang",
    rating: 5,
    reviewText: "The team's passion for classic cars is evident in their work. My Mustang has never looked better. They understood exactly what I wanted and went above and beyond to deliver it.",
    date: "2023-09-20"
  },
  {
    id: "4",
    name: "Emily Wilson",
    vehicle: "Audi Q5",
    rating: 4,
    reviewText: "Very satisfied with the quality of work. The repair was completed on time and the finish is perfect. Would recommend to friends and family.",
    date: "2023-08-15"
  },
  {
    id: "5",
    name: "David Thompson",
    vehicle: "Mercedes-Benz C-Class",
    rating: 5,
    reviewText: "Incredible service from start to finish. The team was knowledgeable, friendly, and their work was impeccable. My Mercedes looks better than when I first bought it!",
    date: "2023-07-22"
  },
  {
    id: "6",
    name: "Jennifer Brown",
    vehicle: "Porsche 911",
    rating: 5,
    reviewText: "I wouldn't trust my Porsche with anyone else. The restoration work was flawless and the attention to historical accuracy was impressive. A truly remarkable job.",
    date: "2023-07-05"
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // In a real implementation, this would fetch from Supabase
    const fetchReviews = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setReviews(sampleReviews);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !vehicle || !reviewText) {
      toast({
        title: "Error",
        description: "Please complete all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, this would submit to Supabase
    toast({
      title: "Review Submitted",
      description: "Thank you for your review! It will be published after moderation.",
    });

    // Reset form
    setName("");
    setEmail("");
    setVehicle("");
    setRating(5);
    setReviewText("");
    setOpen(false);
  };

  return (
    <>
      <Hero
        title="Customer Reviews"
        subtitle="See what our customers have to say about our work"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Customer Testimonials</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We're proud of the work we do and the relationships we build with our customers.
            </p>
            
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="mt-6 bg-brand-blue hover:bg-opacity-80">
                  Leave a Review
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Share Your Experience</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
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
                    <Label htmlFor="vehicle">Vehicle *</Label>
                    <Input 
                      id="vehicle" 
                      value={vehicle} 
                      onChange={(e) => setVehicle(e.target.value)} 
                      placeholder="Make, model, and year" 
                      required 
                    />
                  </div>
                  <div>
                    <Label>Rating *</Label>
                    <div className="flex space-x-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-0 bg-transparent border-none"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="review">Review *</Label>
                    <Textarea 
                      id="review" 
                      value={reviewText} 
                      onChange={(e) => setReviewText(e.target.value)} 
                      placeholder="Share your experience with us" 
                      className="min-h-[100px]"
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-brand-blue hover:bg-opacity-80">
                    Submit Review
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
            </div>
          ) : reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">"{review.reviewText}"</p>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.vehicle}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(review.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No reviews found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Review Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-blue mb-2">4.9/5</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">Average Rating</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-blue mb-2">98%</div>
                  <p className="text-gray-600">Customer Satisfaction</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-blue mb-2">250+</div>
                  <p className="text-gray-600">Verified Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Customer Stories</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Hear directly from our satisfied customers about their experience with SuperSpray BodyShop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="font-bold text-xl mb-4">Customer Testimonial Video</h3>
                <p className="text-gray-600 mb-4">Watch John's story about his Jaguar E-Type restoration</p>
                <Button className="bg-brand-dark hover:bg-opacity-80">Watch Video</Button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="font-bold text-xl mb-4">Customer Testimonial Video</h3>
                <p className="text-gray-600 mb-4">See the transformation of Sarah's classic Mercedes</p>
                <Button className="bg-brand-dark hover:bg-opacity-80">Watch Video</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
