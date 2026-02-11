import { Heart, Clock, Globe, Shield } from "lucide-react";

export function ImpactBenefitsSection() {
  const benefits = [
    {
      icon: <Heart className="w-16 h-16 text-red-500" />,
      title: "Lives Saved",
      subtitle: "Every Second Counts",
      stats: "50M+ People Protected",
      description: "Early warning systems reduce disaster casualties by up to 90%. Our AI-powered predictions provide the critical time needed for evacuation and safety measures."
    },
    {
      icon: <Clock className="w-16 h-16 text-blue-500" />,
      title: "Early Response",
      subtitle: "Minutes Make the Difference",
      stats: "24/7 Monitoring",
      description: "Continuous surveillance and instant alert generation ensure emergency responders and communities have maximum time to react and prepare."
    },
    {
      icon: <Globe className="w-16 h-16 text-green-500" />,
      title: "Global Reach",
      subtitle: "Worldwide Protection",
      stats: "100+ Cities Covered",
      description: "Scalable infrastructure supporting communities worldwide, from dense urban centers to remote rural areas, ensuring no one is left unprotected."
    },
    {
      icon: <Shield className="w-16 h-16 text-orange-500" />,
      title: "24/7 Monitoring",
      subtitle: "Never Stops Watching",
      stats: "99.9% Uptime",
      description: "Round-the-clock monitoring with redundant systems ensures continuous protection. Our AI never sleeps, constantly analyzing and ready to alert."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Safer, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Smarter Communities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming disaster preparedness through intelligent prediction and rapid response systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/10 rounded-2xl backdrop-blur-sm group-hover:from-white/10 group-hover:to-white/20 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative p-8 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                    {benefit.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{benefit.subtitle}</p>

                {/* Stats */}
                <div className="text-xl font-semibold text-orange-400 mb-4">{benefit.stats}</div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>

              {/* Accent Border */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-orange-400">95%</div>
            <div className="text-gray-400">Prediction Accuracy</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-400">30sec</div>
            <div className="text-gray-400">Average Response</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-400">50M+</div>
            <div className="text-gray-400">Lives Protected</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-red-400">24/7</div>
            <div className="text-gray-400">Active Monitoring</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-2xl text-gray-300 mb-6">
            Join the next generation of disaster preparedness
          </p>
          <div className="flex justify-center">
            <div className="px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full text-white font-semibold shadow-lg">
              Protecting Communities Worldwide
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
