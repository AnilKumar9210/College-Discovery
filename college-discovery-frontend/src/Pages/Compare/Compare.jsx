import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import colleges from "../../data/colleges";
import CompareTable from "../../components/compare/CompareTable";

const Compare = () => {
  const [collegeOneId, setCollegeOneId] = useState(1);
  const [collegeTwoId, setCollegeTwoId] = useState(2);

  const collegeOne = colleges.find(
    (college) => college.id === Number(collegeOneId)
  );

  const collegeTwo = colleges.find(
    (college) => college.id === Number(collegeTwoId)
  );

  return (
    <MainLayout>
      <section className="py-12">

        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-4xl font-bold mb-8">
            Compare Colleges
          </h1>

          <div className="grid md:grid-cols-2 gap-4 mb-10">

            <select
              value={collegeOneId}
              onChange={(e) =>
                setCollegeOneId(e.target.value)
              }
              className="border rounded-xl p-4"
            >
              {colleges.map((college) => (
                <option
                  key={college.id}
                  value={college.id}
                >
                  {college.name}
                </option>
              ))}
            </select>

            <select
              value={collegeTwoId}
              onChange={(e) =>
                setCollegeTwoId(e.target.value)
              }
              className="border rounded-xl p-4"
            >
              {colleges.map((college) => (
                <option
                  key={college.id}
                  value={college.id}
                >
                  {college.name}
                </option>
              ))}
            </select>

          </div>

          <CompareTable
            collegeOne={collegeOne}
            collegeTwo={collegeTwo}
          />

        </div>

      </section>
    </MainLayout>
  );
};

export default Compare;