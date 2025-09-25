import { Facebook, Twitter, Linkedin, Mail, Phone, Shield } from "lucide-react";

export function Footer() {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "#privacy" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">DisasterShield</h3>
                <p className="text-sm text-gray-400">Real-Time Disaster Prediction & Alert System</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              AI-powered disaster prediction with real-time alarming and multi-channel alerts to keep communities safe. 
              Protecting lives through intelligent early warning systems.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>support@disastershield.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>Emergency Hotline: 1-800-SHIELD-1</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Emergency Resources</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors duration-300">
                  Emergency Preparedness Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors duration-300">
                  Disaster Response Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors duration-300">
                  Community Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors duration-300">
                  Mobile App Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors duration-300">
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 DisasterShield. All rights reserved. Protecting communities worldwide.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-600 rounded-full transition-all duration-300 group"
                >
                  <div className="text-gray-400 group-hover:text-white">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-center">
            <p className="text-red-200 text-sm">
              <span className="font-semibold">Emergency Notice:</span> For immediate disaster alerts, ensure notifications are enabled. 
              In case of system emergency, contact local authorities at 911.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}