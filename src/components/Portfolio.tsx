import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

type Category = "All" | "Web" | "Design" | "Photo" | "Video";

type Project = {
  title: string;
  category: Category;
  tag: string;
};

const categories: Category[] = ["All", "Web", "Design", "Photo", "Video"];

const projects: Project[] = [
  { title: "Modern Business Website", category: "Web", tag: "Web Design & Dev" },
  { title: "UI Dashboard Design", category: "Design", tag: "UI/UX Design" },
  { title: "Brand Identity System", category: "Design", tag: "Branding" },
  { title: "Product Photography", category: "Photo", tag: "Photography" },
  { title: "Promotional Video Edit", category: "Video", tag: "Videography" },
  { title: "Startup Landing Page", category: "Web", tag: "Web Development" },
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-10">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Selected projects that define our craft.
            </h2>
          </div>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn>
          <div className="relative inline-flex gap-6 mb-12 border-b border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`pb-3 text-sm transition relative
                  ${
                    active === cat
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {cat}

                {active === cat && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-white"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6 }}
                className="group relative border border-white/10 rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-white/5 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Project Preview
                  </span>
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-black/80 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  flex items-end"
                >
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {project.tag}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
