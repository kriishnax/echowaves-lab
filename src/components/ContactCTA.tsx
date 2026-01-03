const ContactCTA = () => {
  return (
    <section className="py-28 border-t border-white/10 text-center">
      <h2 className="text-3xl md:text-5xl font-bold">
        Have an idea? Let’s make it real.
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Ready to collaborate? Let’s build something impactful together.
      </p>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <button className="px-8 py-4 bg-white text-black rounded-md font-medium
          hover:bg-gray-200 hover:scale-[1.04] transition-all">
          Start a Project
        </button>

        <button className="px-8 py-4 border border-white/20 rounded-md
          hover:border-white hover:bg-white/5 transition-all">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
