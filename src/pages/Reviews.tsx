
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import ReviewForm from "@/components/ReviewForm";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  review_text: string;
  created_at: string;
  images?: string[] | null;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data);
    } catch (error: any) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <>
      <Hero
        title="Customer Reviews"
        subtitle="See what our customers have to say about their experience with SuperSpray BodyShop"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Testimonials</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Our customers are our best advocates. Here's what they have to say about their experiences with our service.
            </p>
          </div>

          <div className="mb-8 text-center">
            <button
              onClick={toggleForm}
              className="bg-brand-blue hover:bg-opacity-80 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              {formVisible ? "Hide Review Form" : "Leave a Review"}
            </button>
          </div>

          {formVisible && (
            <div className="max-w-2xl mx-auto mb-16">
              <ReviewForm />
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
            </div>
          ) : reviews.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
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
                  <p className="text-gray-600 mb-4">"{review.review_text}"</p>
                  
                  {review.images && review.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {review.images.map((imageUrl, index) => (
                        <div key={index} className="relative overflow-hidden h-20 rounded">
                          <img 
                            src={`${supabase.storage.from('reviews').getPublicUrl(imageUrl).data.publicUrl}`}
                            alt={`Review image ${index + 1} from ${review.name}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.vehicle}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No reviews available yet. Be the first to leave a review!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Reviews;
