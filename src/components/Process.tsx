import FadeIn from "./FadeIn";

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your brand, goals, and audience to define a clear direction before execution.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft clean UI/UX, visuals, and concepts that align creativity with purpose.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop scalable websites, content, and media using modern tools and workflows.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, refine, and launch your project smoothly across platforms.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "We help you grow through optimization, content updates, and ongoing support.",
  },
];

const Process = () => {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A simple, structured approach to creating impact.
            </h2>
            <p className="mt-4 text-gray-400">
              Every project follows a proven workflow that ensures clarity,
              quality, and measurable results.
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <div
                className="relative border border-white/10 rounded-2xl p-6
                hover:border-white/30 hover:-translate-y-1
                transition-all duration-300"
              >
                <span className="text-4xl font-bold text-white/10">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
