import { motion } from "framer-motion";

const WIPBanner = () => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        fixed top-0 inset-x-0 z-[60]
        bg-yellow-400/10 border-b border-yellow-400/30
        text-yellow-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center">
        <p className="text-xs sm:text-sm">
          🚧 Work in Progress — We’re actively improving this website.
        </p>
      </div>
    </motion.div>
  );
};

export default WIPBanner;
