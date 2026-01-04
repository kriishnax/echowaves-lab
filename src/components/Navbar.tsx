import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 sm:top-0 w-full bg-black/80 backdrop-blur
      border-b border-white/10 z-50"
    >
      <div
        className="max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        h-14 sm:h-16
        flex items-center justify-between"
      >
        {/* Brand */}
        <h1 className="text-base sm:text-lg font-bold tracking-wide">
          EchoWaves Lab
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Label (tablet+) */}
          <span className="hidden sm:inline text-xs sm:text-sm text-gray-400">
            Creative Agency
          </span>

          {/* CTA (desktop only) */}
          <button
            className="hidden md:inline-flex
            px-4 py-2 text-sm
            border border-white/20 rounded-md
            hover:border-white hover:bg-white/5
            transition"
          >
            Start Project
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
