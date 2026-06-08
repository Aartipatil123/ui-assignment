import { CheckCircle } from "lucide-react";
import trust1 from "../assets/trust1.jpg";
import trust2 from "../assets/trust2.jpg";
import trust3 from "../assets/trust3.jpg";

const Trust = () => {
  const points = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Elementum nisl duis tortor sed.",
    "Suspendisse lobortis vitae quis vehicula.",
    "Urna posuere consequat velit vulputate.",
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Our Clients Trust Us
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, perspiciatis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-16 items-center">

          <div className="grid grid-cols-2 gap-4">

            <div className="overflow-hidden rounded-2xl shadow-md group">
              <img
                src={trust1}
                alt="Business Team"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-md group">
              <img
                src={trust2}
                alt="Meeting"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-md group col-span-2">
              <img
                src={trust3}
                alt="Collaboration"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

          </div>

          <div>

            <div className="space-y-5">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={22}
                    className="text-indigo-600 mt-1 flex-shrink-0"
                  />

                  <p className="text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>

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
                transition-all
                duration-300
              "
            >
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Trust;