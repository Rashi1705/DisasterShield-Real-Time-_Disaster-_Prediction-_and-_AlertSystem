import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Zap } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwbW9uaXRvcmluZyUyMHNjcmVlbnN8ZW58MXx8fHwxNzU4Nzk2Mzg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Data monitoring center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-orange-900/90 to-red-900/90"></div>
        
        {/* Alert Waveform Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              d="M0,200 L50,200 L75,100 L100,300 L125,50 L150,350 L175,120 L200,280 L225,80 L250,320 L275,160 L300,240 L325,180 L350,220 L375,200 L1200,200"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-orange-500 animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Alert Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30">
            <Zap className="w-12 h-12 text-orange-300 animate-pulse" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Every Second <span className="text-orange-300">Counts</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Stay protected with DisasterShield. When disaster strikes, you'll have the early warning that makes all the difference.
        </p>

        {/* Urgency Indicators */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-300 animate-pulse">URGENT</div>
            <div className="text-sm text-orange-200">Real-Time Protection</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-300 animate-bounce">CRITICAL</div>
            <div className="text-sm text-red-200">Life-Saving Alerts</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <div className="text-sm text-orange-200">
            Join 50M+ people already protected by DisasterShield
          </div>
        </div>

        {/* Emergency Contact Info */}
        <div className="mt-12 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-red-500/30">
          <div className="text-orange-300 font-semibold mb-2">Emergency Preparedness Starts Now</div>
          <div className="text-orange-100 text-sm">
            Free trial includes full access to prediction models, alert systems, and 24/7 monitoring
          </div>
        </div>
      </div>

      {/* Animated Alert Pulses */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-red-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
    </section>
  );
}