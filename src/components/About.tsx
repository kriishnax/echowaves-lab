import FadeIn from "./FadeIn";

const About = () => {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A creative studio built on design, technology, and storytelling.
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              EchoWaves Lab is a creative digital studio founded by Krishna and
              Aditya, focused on building meaningful digital experiences.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["10+", "Projects"],
              ["2", "Founders"],
              ["5+", "Services"],
              ["100%", "Client Focus"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-3xl font-bold">{num}</h3>
                <p className="mt-2 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
