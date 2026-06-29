import groq from "../config/groq.js";
import College from "../models/College.js";

export const compareColleges = async (
  req,
  res
) => {

    const collegeList = await College.find().select ("name");

    // console.log (collegeList);

    console.log (req.body)

  try {

    const {
      college1,
      college2,
    } = req.body;

    const firstCollege =
  await College.findOne({
    name: {
      $regex: college1,
      $options: "i",
    },
  });

const secondCollege =
  await College.findOne({
    name: {
      $regex: college2,
      $options: "i",
    },
  });

  console.log(
  "College 1:",
  firstCollege?.name
);

console.log(
  "College 2:",
  secondCollege?.name
);

    if (
      !firstCollege ||
      !secondCollege
    ) {
      return res.status(404).json({
        success: false,
        message:
          "College not found",
      });
    }

    const completion =
      await groq.chat.completions.create(
        {
          model:
            "llama-3.1-8b-instant",

          messages: [
            {
              role:
                "system",

              content: `
Compare the following colleges.

College 1:
Name: ${firstCollege.name}
State: ${firstCollege.state}
Fees: ${firstCollege.fees}
Rating: ${firstCollege.rating}
NIRF Rank: ${firstCollege.nirfRank}
Average Package: ${firstCollege.placements?.averagePackage}
Highest Package: ${firstCollege.placements?.highestPackage}

College 2:
Name: ${secondCollege.name}
State: ${secondCollege.state}
Fees: ${secondCollege.fees}
Rating: ${secondCollege.rating}
NIRF Rank: ${secondCollege.nirfRank}
Average Package: ${secondCollege.placements?.averagePackage}
Highest Package: ${secondCollege.placements?.highestPackage}

Compare:
1. Academics
2. Placements
3. Fees
4. ROI
5. Campus
6. Final Verdict
`,
            },
          ],
        }
      );

    return res.json({
      success: true,
      comparison:
        completion.choices[0]
          .message.content,

      colleges: [
        firstCollege,
        secondCollege,
      ],
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        error.message,
    });

  }

};