
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };
    
    checkAuth();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });
    
    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      toast({
        title: "Login successful",
        description: "Welcome to the dashboard!",
      });
      
      navigate('/admin');
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resetEmail) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) throw error;
      
      setResetSent(true);
      toast({
        title: "Password reset email sent",
        description: "Check your inbox for a password reset link.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send password reset email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
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
            Admin Portal
          </h2>
        </div>
        
        <Tabs defaultValue="login" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="forgot">Forgot Password</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </form>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="font-medium text-brand-blue hover:text-opacity-80">
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="forgot">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {resetSent ? (
                <div className="text-center py-4">
                  <div className="text-green-500 text-5xl mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-medium mb-2">Reset Email Sent</h3>
                  <p className="mb-4 text-gray-600">
                    Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setResetSent(false)}
                    className="mt-2"
                  >
                    Try again
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handlePasswordReset}>
                  <div>
                    <Label htmlFor="reset-email">Email address</Label>
                    <Input
                      id="reset-email"
                      name="reset-email"
                      type="email"
                      required
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="Enter your email"
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
                      "Send reset link"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
