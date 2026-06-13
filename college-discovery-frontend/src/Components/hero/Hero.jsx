import { Search, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-16 md:py-24 lg:py-32">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>

              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                🎓 Discover Top Colleges Across India
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Find Your
                <span className="text-blue-600"> Dream College </span>
                With Confidence
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                Search, compare, and explore colleges based on
                rankings, placements, fees, courses, and more.
              </p>

              {/* Search Box */}
              <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-2 shadow-lg flex flex-col sm:flex-row gap-3">

                <div className="flex items-center flex-1 px-3">
                  <Search className="text-slate-400" size={20} />

                  <input
                    type="text"
                    placeholder="Search colleges, courses, cities..."
                    className="w-full px-3 py-3 outline-none"
                  />
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                  Search
                </button>

              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
                  Explore Colleges
                </button>

                <button className="border border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition">
                  Compare Colleges
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

            {/* Right Side */}
            <div className="flex justify-center">

              <div className="relative">

                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-100 absolute blur-3xl opacity-70"></div>

                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800"
                  alt="College Campus"
                  className="relative rounded-3xl shadow-2xl object-cover w-full max-w-md"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;