const Contact = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            rounded-[10px]
            px-[50px]
            py-[27px]
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
            text-white
          "
        >

          <div>
            <h2 className="text-3xl font-bold">
              Need More Information?
            </h2>

            <p className="mt-2 text-white/80 max-w-xl">
              Write your concern to us and our specialist
              will get back to you.
            </p>
          </div>

          <button
            className="
              px-8
              py-3
              rounded-xl
              bg-white
              text-indigo-600
              font-semibold
              shadow-md
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
};

export default Contact;