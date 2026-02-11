import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1614728672820-e88260ce6d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMGRpc2FzdGVyJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NTg3OTYzODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Satellite monitoring Earth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
          Predict. Alert. Protect.
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          AI-powered disaster prediction with real-time alarming and multi-channel alerts to keep communities safe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg backdrop-blur-sm"
          >
            See How It Works
          </Button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-sm text-blue-200">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">Real-Time</div>
            <div className="text-sm text-blue-200">Alerts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">AI-Powered</div>
            <div className="text-sm text-blue-200">Prediction</div>
          </div>
        </div>
      </div>

      {/* Animated Alert Pulse */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0"></div>
      </div>
      
      <div className="absolute bottom-32 left-20 hidden lg:block">
        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
