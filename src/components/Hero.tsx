import FadeIn from "./FadeIn";
import HeroLight from "./HeroLight";

const Hero = () => {
  return (
    <section
      className="
      relative
      pt-24 sm:pt-28 md:pt-32 lg:pt-36
      min-h-[85vh] sm:min-h-screen
      flex items-center
      overflow-hidden
      "
    >
      {/* Subtle light animation */}
      <HeroLight />

      {/* Content */}
      <div
        className="
        relative z-10
        max-w-4xl mx-auto
        px-4 sm:px-6 lg:px-8
        text-center sm:text-left
        "
      >
        {/* Heading */}
        <FadeIn>
          <h1
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            "
          >
            We design, build & amplify
            <br className="hidden sm:block" />
            digital experiences.
          </h1>
        </FadeIn>

        {/* Capability pills */}
        <FadeIn delay={0.05}>
          <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2">
            {[
              "Web Design",
              "Development",
              "Photography",
              "Videography",
              "Branding",
            ].map((item) => (
              <span
                key={item}
                className="
                px-3 py-1
                text-xs sm:text-sm
                border border-white/20
                rounded-full
                text-gray-300
                "
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.1}>
          <p
            className="
            mt-5 sm:mt-6
            text-sm sm:text-base
            text-gray-400
            max-w-xl
            mx-auto sm:mx-0
            "
          >
            A creative digital studio helping brands grow through thoughtful
            design, modern development, and visual storytelling.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.2}>
          <div
            className="
            mt-7 sm:mt-8
            flex flex-col sm:flex-row
            justify-center sm:justify-start
            gap-3 sm:gap-4
            "
          >
            <button
              className="
              px-6 sm:px-8
              py-3 sm:py-4
              bg-white text-black
              rounded-md
              font-medium
              hover:bg-gray-200
              hover:scale-[1.03]
              transition-all
              "
            >
              Start a Project
            </button>

            <button
              className="
              px-6 sm:px-8
              py-3 sm:py-4
              border border-white/20
              rounded-md
              hover:border-white
              hover:bg-white/5
              transition-all
              "
            >
              View Our Work
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div
        className="
        absolute bottom-6
        left-1/2 -translate-x-1/2
        text-xs text-gray-400
        flex flex-col items-center gap-2
        "
      >
        <span>Scroll</span>
        <span className="w-px h-8 bg-gray-400/40" />
      </div>
    </section>
  );
};

export default Hero;
