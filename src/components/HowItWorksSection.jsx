import { Database, Brain, AlertTriangle, Megaphone } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Collect Data",
      description: "Continuous aggregation of satellite imagery, weather sensors, historical patterns, and real-time environmental data from multiple sources.",
      details: ["Satellite imagery", "Weather sensors", "Historical patterns", "Environmental data"]
    },
    {
      number: "02",
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "AI Prediction",
      description: "Advanced deep learning models analyze patterns and predict potential disasters with high accuracy and precise timing.",
      details: ["Deep learning analysis", "Pattern recognition", "Risk assessment", "Timing prediction"]
    },
    {
      number: "03",
      icon: <AlertTriangle className="w-12 h-12 text-orange-600" />,
      title: "Generate Alerts",
      description: "Intelligent alert generation with severity classification and targeted messaging based on threat level and affected areas.",
      details: ["Severity classification", "Targeted messaging", "Risk zones", "Threat assessment"]
    },
    {
      number: "04",
      icon: <Megaphone className="w-12 h-12 text-red-600" />,
      title: "Multi-Channel Dissemination",
      description: "Simultaneous alert distribution across all communication channels including sirens, mobile apps, SMS, and public broadcasts.",
      details: ["Emergency sirens", "Mobile notifications", "SMS alerts", "Public broadcasts"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How DisasterShield Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From data collection to life-saving alerts â€” our comprehensive system operates seamlessly to protect communities
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 to-red-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-px h-8 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Lightning-Fast Response Time</h3>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">&lt;30s</div>
                <div className="text-blue-100">Data Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">&lt;15s</div>
                <div className="text-blue-100">Alert Generation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">&lt;10s</div>
                <div className="text-blue-100">Multi-Channel Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
