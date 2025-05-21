
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if we have a session from the password reset flow
  useEffect(() => {
    const checkHashParams = async () => {
      // Check if we're in a password reset flow with hash params
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      // For auth reset flow
      if (hashParams.has('type') && hashParams.get('type') === 'recovery') {
        // We're in a password recovery flow
        // The user will enter their new password in the form
        return;
      } else {
        // Not in a password reset flow, redirect to login
        navigate('/login');
      }
    };
    
    checkHashParams();
  }, [navigate]);

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please enter and confirm your new password.",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });
      
      if (error) throw error;
      
      toast({
        title: "Password updated",
        description: "Your password has been successfully updated.",
      });
      
      setIsComplete(true);
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message || "There was an error updating your password.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (isComplete) {
    // After a short delay, redirect to login
    setTimeout(() => {
      navigate('/login');
    }, 3000);
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2">Password Updated</h2>
            <p className="text-gray-600 mb-4">Your password has been successfully updated.</p>
            <p className="text-gray-600">Redirecting you to login...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img 
            src="/lovable-uploads/4f0f7dc4-e69c-42fb-9a05-7fc6cee81beb.png" 
            alt="SuperSpray BodyShop Logo" 
            className="mx-auto h-20" 
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Your Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your new password
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-6" onSubmit={handlePasswordUpdate}>
            <div>
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
              />
            </div>
            
            <div>
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your new password"
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
                  Updating password...
                </>
              ) : (
                "Update Password"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
