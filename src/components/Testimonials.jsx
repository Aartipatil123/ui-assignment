const Testimonials = () => {
  const reviews = [
    {
      name: "Jacqueline Wright",
      role: "Customer",
      review:
        "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum.",
    },
    {
      name: "Jacqueline Wright",
      role: "Customer",
      review:
        "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Happy Clients
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="
                bg-slate-50
                border
                border-gray-200
                rounded-2xl
                h-[232px]
                p-8
                flex
                flex-col
                justify-between
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <p className="text-gray-600 leading-relaxed">
                {item.review}
              </p>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;