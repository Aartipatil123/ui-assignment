import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const Blog = () => {
  const blogs = [
    {
      image: blog1,
      title: "Humans Are Much Smarter Than AI",
      desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: blog2,
      title: "Humans Are Much Smarter Than AI",
      desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: blog3,
      title: "Humans Are Much Smarter Than AI",
      desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Latest Blog
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl">
              Discover insights, trends, and ideas that help businesses
              grow and stay ahead in the digital world.
            </p>
          </div>

          <button
            className="
              px-6 py-3
              rounded-xl
              bg-indigo-600
              text-white
              font-medium
              hover:bg-indigo-700
              transition-all duration-300
            "
          >
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                overflow-hidden
                shadow-md
                h-[433px]
                flex
                flex-col
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                group
              "
            >

              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-4 text-gray-500 text-sm leading-relaxed flex-1">
                  {blog.desc}
                </p>

                <button
                  className="
                    mt-5
                    text-indigo-600
                    font-semibold
                    hover:text-indigo-800
                    transition-colors
                    self-start
                  "
                >
                  Learn More →
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Blog;