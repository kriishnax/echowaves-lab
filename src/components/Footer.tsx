const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold">EchoWaves Lab</h3>
          <p className="mt-4 text-gray-400 text-sm">
            Design. Development. Visual storytelling.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Links
          </p>
          <ul className="space-y-3 text-sm">
            {["Services", "Work", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Social
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            {["Instagram", "LinkedIn", "Behance"].map((s) => (
              <span
                key={s}
                className="hover:text-white transition cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center py-6 text-sm text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} EchoWaves Lab
      </div>
    </footer>
  );
};

export default Footer;
