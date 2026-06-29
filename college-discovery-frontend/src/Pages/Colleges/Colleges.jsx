import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import MainLayout from "../../layouts/MainLayout";
import CollegesHero from "./CollegeHero";
import SearchBar from "./SearchBar";
import CollegeFilters from "./CollegeFilter";
import CollegeGrid from "./CollegeGrid";

import { useColleges } from "../../hooks/useColleges";

const Colleges = () => {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [debouncedSearch] = useDebounce(search, 500);

  const [filters, setFilters] = useState({
    location: "",
    minFees: "",
    maxFees: "",
    minRating: "",
  });

  const { data, isLoading, isError } = useColleges(
    page,
    debouncedSearch,
    filters,
  );

  const colleges = data?.data || [];

  const totalPages = data?.pagination?.totalPages || 1;

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, filters]);

  return (
    <MainLayout>
      <CollegesHero />

      <section className="py-10 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <SearchBar search={search} setSearch={setSearch} />

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Explore Colleges
              </h2>

              <p className="text-slate-600 mt-1">
                {colleges.length} colleges found
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 mt-8">
            <aside>
              <CollegeFilters filters={filters} setFilters={setFilters} />
            </aside>

            <main>
              {isError ? (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-600">
                  Failed to load colleges.
                </div>
              ) : (
                <CollegeGrid colleges={colleges} loading={isLoading} />
              )}

              <div className="flex justify-center gap-3 mt-10">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="
                    px-4
                    py-2
                    bg-white
                    border
                    rounded-lg
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  Previous
                </button>

                <span className="px-4 py-2 font-medium">
                  Page {page} of {totalPages}
                </span>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  className="
                    px-4
                    py-2
                    bg-blue-600
                    text-white
                    rounded-lg
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  Next
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Colleges;
