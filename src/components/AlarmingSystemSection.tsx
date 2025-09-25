import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Smartphone, Radio, Siren, Users } from "lucide-react";

export function AlarmingSystemSection() {
  const alertChannels = [
    {
      icon: <Siren className="w-8 h-8 text-red-600" />,
      title: "Emergency Sirens",
      description: "City-wide alarm systems activated instantly"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-600" />,
      title: "Mobile Alerts",
      description: "Push notifications and SMS to all devices"
    },
    {
      icon: <Radio className="w-8 h-8 text-red-600" />,
      title: "Public Broadcasts",
      description: "Radio and TV emergency announcements"
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Community Networks",
      description: "Local emergency coordinator notifications"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Alarming System <span className="text-red-600">Spotlight</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              DisasterShield ensures warnings are impossible to miss — from phone buzzes to city-wide sirens. 
              Our multi-channel alert system guarantees critical information reaches every person, every time.
            </p>

            <div className="space-y-6 mb-8">
              {alertChannels.map((channel, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm border border-red-100">
                  <div className="flex-shrink-0 p-2 bg-red-50 rounded-lg">
                    {channel.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{channel.title}</h3>
                    <p className="text-gray-600">{channel.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Threshold Highlight */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-3">Dynamic Threshold Adjustment</h3>
              <p className="text-orange-100">
                Alert intensity automatically scales with severity levels. Minor risks trigger targeted notifications, 
                while major threats activate all available warning systems simultaneously.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616685208192-d6fd9a91fe0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBhbGVydCUyMHN5c3RlbSUyMHNpcmVuc3xlbnwxfHx8fDE3NTg3OTYzODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Emergency alert system"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent"></div>
            </div>

            {/* Floating Alert Cards */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                <span className="font-semibold">SEVERE ALERT</span>
              </div>
              <div className="text-sm mt-1">Flash Flood Warning</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-orange-600 text-white p-3 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">Alert Sent</div>
              <div className="text-xs">12,000 devices notified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}