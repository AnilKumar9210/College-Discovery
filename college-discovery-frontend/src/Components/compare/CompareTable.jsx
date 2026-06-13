const CompareTable = ({
  collegeOne,
  collegeTwo,
}) => {
  if (!collegeOne || !collegeTwo) return null;

  return (
    <div className="overflow-x-auto">

      <table className="w-full bg-white rounded-2xl overflow-hidden border border-slate-200">

        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4 text-left">
              Feature
            </th>

            <th className="p-4 text-left">
              {collegeOne.name}
            </th>

            <th className="p-4 text-left">
              {collegeTwo.name}
            </th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b">
            <td className="p-4 font-medium">
              Ranking
            </td>

            <td className="p-4">
              {collegeOne.ranking}
            </td>

            <td className="p-4">
              {collegeTwo.ranking}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 font-medium">
              Location
            </td>

            <td className="p-4">
              {collegeOne.location}
            </td>

            <td className="p-4">
              {collegeTwo.location}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 font-medium">
              Fees
            </td>

            <td className="p-4">
              {collegeOne.fees}
            </td>

            <td className="p-4">
              {collegeTwo.fees}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 font-medium">
              Courses
            </td>

            <td className="p-4">
              {collegeOne.courses}
            </td>

            <td className="p-4">
              {collegeTwo.courses}
            </td>
          </tr>

          <tr>
            <td className="p-4 font-medium">
              Placements
            </td>

            <td className="p-4">
              {collegeOne.placements}
            </td>

            <td className="p-4">
              {collegeTwo.placements}
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default CompareTable;