import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id: string) => {
    // If already on home page → scroll
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home, then scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">EchoWaves Lab</h3>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              A creative digital agency crafting meaningful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("work")}
                  className="hover:text-white transition"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="hover:text-white transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Design & Development</li>
              <li>Branding & UI/UX</li>
              <li>Photography</li>
              <li>Videography</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:echowaveslab@gmail.com"
                  className="hover:text-white transition"
                >
                  echowaveslab@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917205023606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
          <span>© {new Date().getFullYear()} EchoWaves Lab</span>
          <span>Built with care.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
