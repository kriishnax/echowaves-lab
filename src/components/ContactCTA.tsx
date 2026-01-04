import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const ContactCTA = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Let’s build something impactful.
          </h2>

          <p className="mt-6 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to collaborate?  
            Reach out and let’s start the conversation.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917205023606"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSuccess}
              className="
                px-8 py-4
                border border-white/20
                rounded-md
                hover:border-white
                hover:bg-white/5
                transition
              "
            >
              WhatsApp Us
            </a>

            {/* Email */}
            <a
              href="mailto:echowaveslab@gmail.com"
              onClick={handleSuccess}
              className="
                px-8 py-4
                bg-white text-black
                rounded-md
                font-medium
                hover:bg-gray-200
                transition
              "
            >
              Email Us
            </a>
          </div>
        </FadeIn>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-8 text-sm text-green-400"
            >
              Thanks! We’ll get back to you shortly.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactCTA;
