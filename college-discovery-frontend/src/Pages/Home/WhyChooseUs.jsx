import {
  Search,
  BarChart3,
  Bookmark,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Find colleges by course, fees, ranking, and location.",
  },
  {
    icon: BarChart3,
    title: "Easy Comparison",
    description:
      "Compare colleges side by side before making decisions.",
  },
  {
    icon: Bookmark,
    title: "Save Colleges",
    description:
      "Bookmark colleges and access them anytime.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose CollegeDiscover?
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to find the perfect college.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  p-8
                  rounded-2xl
                  border
                  border-slate-200
                  hover:shadow-lg
                  transition
                "
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;