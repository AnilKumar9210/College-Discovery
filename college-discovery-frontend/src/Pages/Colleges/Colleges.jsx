import MainLayout from "../../layouts/MainLayout";
import CollegesHero from "./CollegeHero";
import SearchBar from "./SearchBar";
import CollegeFilters from "./CollegeFilter";
import CollegeGrid from "./CollegeGrid";

const Colleges = () => {
  return (
    <MainLayout>
      <CollegesHero />

      <section className="py-10 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">

          {/* Search */}
          <SearchBar />

          {/* Results Header */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Explore Colleges
              </h2>

              <p className="text-slate-600 mt-1">
                Showing top colleges across India
              </p>
            </div>

            <select
              className="
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                bg-white
                outline-none
              "
            >
              <option>Sort by Ranking</option>
              <option>Sort by Fees</option>
              <option>Sort by Placements</option>
            </select>

          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 mt-8">

            {/* Filters */}
            <aside>
              <CollegeFilters />
            </aside>

            {/* College Cards */}
            <main>
              <CollegeGrid />
            </main>

          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default Colleges;