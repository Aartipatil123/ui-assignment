import google from "../assets/partners/google.jpg";
import microsoft from "../assets/partners/Microsoft.png";
import amazon from "../assets/partners/amazon.png";
import meta from "../assets/partners/meta.jpg";
import netflix from "../assets/partners/netflix.png";
import spotify from "../assets/partners/spotify.png";

const Partners = () => {
  const partners = [
    google,
    microsoft,
    amazon,
    meta,
    netflix,
    spotify,
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Partners
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Trusted by leading companies worldwide to deliver
            innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

          {partners.map((logo, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-gray-200
                rounded-xl
                p-6
                flex
                items-center
                justify-center
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <img
                src={logo}
                alt="Partner Logo"
                className="h-12 object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Partners;