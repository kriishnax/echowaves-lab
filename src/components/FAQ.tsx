import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What services does EchoWaves Lab provide?",
    answer:
      "We offer end-to-end creative solutions including web design and development, UI/UX design, branding, photography, videography, and digital media.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We frequently collaborate with startups, small businesses, and creators, tailoring solutions based on goals, timelines, and budgets.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope, but most websites and branding projects take between 2–6 weeks from discovery to launch.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer post-launch support, updates, and optimization to help you scale and maintain your digital presence.",
  },
  {
    question: "How can we get started?",
    answer:
      "Simply reach out via our contact section. We’ll schedule a quick discussion to understand your needs and propose the next steps.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-gray-400">
              Everything you need to know before working with us.
            </p>
          </div>
        </FadeIn>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <div className="border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span className="font-medium">
                      {faq.question}
                    </span>

                    <span className="text-xl text-gray-400">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
