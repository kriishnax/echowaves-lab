import FadeIn from "./FadeIn";

const services = [
  "Web Design & Development",
  "UI/UX Design",
  "Graphic Design & Branding",
  "Photography",
  "Videography & Editing",
  "Digital Media Solutions",
];

const Services = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service} delay={index * 0.05}>
              <div
                className="border border-white/10 rounded-xl p-6
                hover:-translate-y-2 hover:border-white/30
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg">{service}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
