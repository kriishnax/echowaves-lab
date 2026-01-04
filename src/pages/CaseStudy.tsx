import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <Link
          to="/"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[280px] sm:h-[360px] object-cover rounded-xl"
        />

        <p className="mt-6 text-sm uppercase tracking-widest text-gray-400">
          {project.tag}
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl font-bold">
          {project.title}
        </h1>

        <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl">
          {project.shortDesc}
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pb-24">
        <div className="space-y-10 text-gray-400">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              The Challenge
            </h2>
            <p>
              The client needed a modern, high-performance digital presence that
              clearly communicated their brand value while remaining fast,
              scalable, and visually engaging.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Our Approach
            </h2>
            <p>
              We focused on clean UI/UX, responsive layouts, optimized assets,
              and smooth interactions to ensure an engaging user experience
              across all devices.
            </p>
          </div>
            {/* Tech Stack */}
<div>
  <h2 className="text-xl font-semibold text-white mb-4">
    Tech Stack
  </h2>

  <div className="flex flex-wrap gap-3">
    {project.techStack.map((tech) => (
      <span
        key={tech}
        className="
          px-3 py-1.5
          text-xs sm:text-sm
          border border-white/20
          rounded-full
          text-gray-300
          bg-white/5
        "
      >
        {tech}
      </span>
    ))}
  </div>
</div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              The Outcome
            </h2>
            <p>
              The final result was a polished, conversion-focused digital
              experience aligned with the client’s goals and brand identity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
