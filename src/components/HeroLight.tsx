import { motion } from "framer-motion";

const HeroLight = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blue glow */}
      <motion.div
        animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4
          w-[420px] h-[420px]
          bg-blue-500/20 rounded-full blur-[120px]"
      />

      {/* Purple glow */}
      <motion.div
        animate={{ x: [0, -140, 0], y: [0, 100, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4
          w-[520px] h-[520px]
          bg-purple-500/15 rounded-full blur-[140px]"
      />
    </div>
  );
};

export default HeroLight;
