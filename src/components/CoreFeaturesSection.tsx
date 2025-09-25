import { Satellite, CloudRain, Target, Siren } from "lucide-react";

export function CoreFeaturesSection() {
  const features = [
    {
      icon: <Satellite className="w-12 h-12 text-blue-600" />,
      title: "Satellite Imagery Analysis",
      description: "Real-time analysis of land use, water levels, and environmental changes through advanced satellite data processing."
    },
    {
      icon: <CloudRain className="w-12 h-12 text-blue-600" />,
      title: "Weather Pattern Prediction",
      description: "AI-powered forecasting of storms, floods, cyclones, and extreme weather events with unprecedented accuracy."
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Region-Adaptive Modeling",
      description: "Localized prediction models that adapt to specific geographical and climatic conditions for maximum accuracy."
    },
    {
      icon: <Siren className="w-12 h-12 text-orange-600" />,
      title: "Smart Alarming System",
      description: "Instant multi-channel alerts via sirens, push notifications, SMS, and emergency broadcasts to ensure warnings reach everyone."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Disaster Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection through cutting-edge technology and real-time monitoring systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-300 mb-2">95%</div>
              <div className="text-blue-100">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-300 mb-2">30s</div>
              <div className="text-blue-100">Alert Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-300 mb-2">100+</div>
              <div className="text-blue-100">Cities Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-300 mb-2">50M</div>
              <div className="text-blue-100">Lives Safeguarded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}