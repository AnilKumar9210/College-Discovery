import MainLayout from "../../layouts/MainLayout";

import {
  useCompare,
} from "../../Context/CompareContext";

const Compare = () => {

  const {
    compareColleges,
    removeCollege,
    clearComparison,
  } = useCompare();

  if (
    compareColleges.length === 0
  ) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-20">

          <h1 className="text-4xl font-bold">
            Compare Colleges
          </h1>

          <p className="mt-4">
            Select colleges to compare.
          </p>

        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="max-w-7xl mx-auto py-12 px-4">

        <div className="flex justify-between mb-8">

          <h1 className="text-4xl font-bold">
            Compare Colleges
          </h1>

          <button
            onClick={
              clearComparison
            }
            className="
              bg-red-500
              text-white
              px-4
              py-2
              rounded-lg
            "
          >
            Clear All
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full bg-white rounded-xl">

            <tbody>

              <tr>
                <td className="font-bold p-4">
                  College
                </td>

                {compareColleges.map(
                  (college) => (
                    <td
                      key={
                        college._id
                      }
                      className="p-4"
                    >
                      {college.name}
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="font-bold p-4">
                  Rating
                </td>

                {compareColleges.map(
                  (college) => (
                    <td
                      key={
                        college._id
                      }
                      className="p-4"
                    >
                      {
                        college.rating
                      }
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="font-bold p-4">
                  Fees
                </td>

                {compareColleges.map(
                  (college) => (
                    <td
                      key={
                        college._id
                      }
                      className="p-4"
                    >
                      ₹
                      {college.fees?.toLocaleString()}
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="font-bold p-4">
                  State
                </td>

                {compareColleges.map(
                  (college) => (
                    <td
                      key={
                        college._id
                      }
                      className="p-4"
                    >
                      {
                        college.state
                      }
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="font-bold p-4">
                  Avg Package
                </td>

                {compareColleges.map(
                  (college) => (
                    <td
                      key={
                        college._id
                      }
                      className="p-4"
                    >
                      ₹
                      {college
                        .placements
                        ?.averagePackage
                        ?.toLocaleString()}
                    </td>
                  )
                )}
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
};

export default Compare;