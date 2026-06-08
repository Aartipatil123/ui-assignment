import statsBanner from "../assets/stats-banner.jpg";

const Stats = () => {
  const stats = [
    { value: "12K", label: "Clients" },
    { value: "55%", label: "Annual Growth" },
    { value: "5K", label: "Projects" },
    { value: "80%", label: "Positive Ratings" },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-white text-4xl font-bold max-w-4xl mx-auto">
            Our Business Strategy Has Helped Many Businesses Across The Globe
          </h2>

          <p className="text-white/80 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
            Suspendisse lobortis vitae quis vehicula pellentesque sit id.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                p-8
                rounded-2xl
                text-center
                shadow-lg
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-4xl font-bold text-indigo-600">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-16">
          <img
            src={statsBanner}
            alt="Business Strategy"
            className="
              w-full
              h-[500px]
              object-cover
              rounded-3xl
              shadow-2xl
            "
          />
        </div>

      </div>
    </section>
  );
};

export default Stats;