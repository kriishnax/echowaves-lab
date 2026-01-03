import FadeIn from "./FadeIn";
import krishnaImg from "../assets/krishna.jpg";
import adityaImg from "../assets/aditya.jpg";

type Founder = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const founders: Founder[] = [
  {
    name: "Krishna",
    role: "Co-Founder • Visual & Media",
    bio: "Specializes in photography, videography, and visual storytelling, helping brands communicate with impact and authenticity.",
    
    image: krishnaImg,
  },
  {
    name: "Aditya",
    role: "Co-Founder • Design & Development",
    bio: "Focused on crafting modern web experiences, clean UI/UX, and scalable digital solutions that align creativity with business goals.",
    image: adityaImg,
  },
];

const Founders = () => {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
              Founders
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              The minds behind EchoWaves Lab.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <FadeIn key={founder.name} delay={index * 0.1}>
              <div
                className="border border-white/10 rounded-2xl p-8
                hover:border-white/30 hover:-translate-y-1
                transition-all duration-300"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full object-cover mb-6
                  ring-2 ring-white/10"
                />

                <h3 className="text-xl font-semibold">{founder.name}</h3>
                <p className="mt-1 text-sm text-gray-400">{founder.role}</p>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
