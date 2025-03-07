import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Mail, Github, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: localStorage.getItem('rememberedEmail') || '',
      rememberMe: Boolean(localStorage.getItem('rememberedEmail')),
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Here you would typically make an API call to your backend
      console.log('Login attempt:', data);

      if (data.rememberMe) {
        localStorage.setItem('rememberedEmail', data.email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast.info(`${provider} login coming soon!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-gradient-x relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="flex flex-col items-center space-y-4">
          <img src="/FEASTABLES.jpeg" alt="Logo" className="h-16 w-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Welcome Back
          </h1>
        </div>
        
        <Card className="border-2 border-primary/10 shadow-2xl backdrop-blur-sm bg-card/90 transition-all duration-300 hover:shadow-primary/5">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Sign in to your account
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground/80">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full group relative overflow-hidden border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                onClick={() => handleSocialLogin('Google')}
              >
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <span>Google</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
              <Button
                variant="outline"
                className="w-full group relative overflow-hidden border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                onClick={() => handleSocialLogin('GitHub')}
              >
                <Github className="mr-2 h-4 w-4 text-primary" />
                <span>GitHub</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-primary/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background/80 backdrop-blur-sm px-2 text-muted-foreground/60">
                  Or continue with
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</Label>
                <div className="relative group">
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    {...register('email')}
                    className="w-full transition-all border-primary/20 focus:border-primary group-hover:border-primary/40 bg-background/50 backdrop-blur-sm"
                    autoComplete="email"
                    autoFocus
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1 ml-1 absolute animate-in fade-in slide-in-from-top-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-primary/80 transition-colors hover:underline underline-offset-4"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    className="w-full pr-10 transition-all border-primary/20 focus:border-primary group-hover:border-primary/40 bg-background/50 backdrop-blur-sm"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  {errors.password && (
                    <p className="text-sm text-red-500 mt-1 ml-1 absolute animate-in fade-in slide-in-from-top-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  onCheckedChange={(checked) => {
                    setValue('rememberMe', checked === true);
                  }}
                  defaultChecked={Boolean(localStorage.getItem('rememberedEmail'))}
                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary border-primary/20"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Button 
                className="w-full group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300" 
                type="submit" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <span className="flex items-center justify-center">
                    Sign in
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2 duration-300" />
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <div className="w-full text-center">
              <p className="text-sm text-muted-foreground/80">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="text-primary hover:text-primary/80 font-medium transition-colors hover:underline underline-offset-4"
                >
                  Create one
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login; 