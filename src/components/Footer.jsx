const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-2xl font-bold text-indigo-400">
            SP
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">
            Heading
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">
              Link Here
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Link Here
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Link Here
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">
            Heading
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">
              Link Here
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Link Here
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Link Here
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">
            Connect With Us
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">
              LinkedIn
            </li>

            <li className="hover:text-white cursor-pointer transition-colors">
              Instagram
            </li>

            <li className="hover:text-white cursor-pointer transition-colors">
              Email
            </li>
          </ul>
        </div>

      </div>

    </footer>
  );
};

export default Footer;