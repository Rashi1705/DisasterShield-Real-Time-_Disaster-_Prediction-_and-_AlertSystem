import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1614728672820-e88260ce6d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMGRpc2FzdGVyJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NTg3OTYzODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Satellite monitoring Earth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 container mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          DisasterShield
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-8 items-center">
          <a
            href="#home"
            className="hover:text-blue-200 transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-200 transition-colors font-medium"
          >
            About
          </a>
          <button className="px-6 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors font-medium">
            Sign In
          </button>
          <button 
            onClick={() => navigate("/login")}
            className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors font-medium"
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}

