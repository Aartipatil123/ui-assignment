import { motion } from "framer-motion";
import heroImage from "../assets/img.jpg";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Great Design Is{" "}
            <span className="text-indigo-600">
              Invisible
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Create beautiful digital experiences that feel natural and effortless.
          </p>

          <button
            className="
              mt-8
              px-6
              py-3
              rounded-xl
              bg-indigo-600
              text-white
              font-medium
              hover:bg-indigo-700
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Get Started
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImage}
            alt="Hero"
            className="
              w-full
              h-[450px]
              object-cover
              rounded-3xl
              shadow-xl
            "
          />
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;