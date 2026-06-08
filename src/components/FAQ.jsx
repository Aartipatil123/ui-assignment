import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqImage from "../assets/faq.jpg";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "Lorem ipsum dolor sit amet consectetur",
      a: "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas.",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur",
      a: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur",
      a: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-14">

          <div>
            <img
              src={faqImage}
              alt="FAQ"
              className="
                w-full
                max-w-[466px]
                h-[466px]
                object-cover
                rounded-3xl
                shadow-lg
              "
            />
          </div>
          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                "
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-5
                    text-left
                  "
                >
                  <span className="font-medium text-gray-900">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`
                      transition-transform
                      duration-300
                      ${open === index ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {open === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-500">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;