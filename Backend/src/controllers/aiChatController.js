import groq from "../config/groq.js";
import College from "../models/College.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const userMessage =
      message.toLowerCase();

    // Extract rank
    const rankMatch =
      userMessage.match(/\d+/);

    const rank =
      rankMatch
        ? Number(rankMatch[0])
        : null;

    // Extract budget
    const budgetMatch =
      userMessage.match(
        /(\d+)\s*lakh/
      );

    const budget =
      budgetMatch
        ? Number(
            budgetMatch[1]
          ) * 100000
        : null;

    // Extract state

    const states = [
      "Maharashtra",
      "Telangana",
      "Karnataka",
      "Tamil Nadu",
      "Delhi",
      "Kerala",
      "Rajasthan",
      "Andhra Pradesh",
      "West Bengal",
      "Uttar Pradesh",
    ];

    const selectedState =
      states.find(
        (state) =>
          userMessage.includes(
            state.toLowerCase()
          )
      );

    // Extract Exam

    let exam = null;

    if (
      userMessage.includes(
        "jee"
      )
    ) {
      exam = "JEE";
    }

    if (
      userMessage.includes(
        "neet"
      )
    ) {
      exam = "NEET";
    }

    if (
      userMessage.includes(
        "cat"
      )
    ) {
      exam = "CAT";
    }

    // Build Mongo Query

    const query = {};

    if (selectedState) {
      query.state =
        selectedState;
    }

    if (budget) {
      query.fees = {
        $lte: budget,
      };
    }

    let colleges =
      await College.find(
        query
      );

    // Filter by exam cutoff

    if (exam && rank) {
      colleges =
        colleges.filter(
          (college) => {

            const cutoff =
              college
                .examCutoffs
                ?.get?.(
                  exam
                ) ??
              college
                .examCutoffs?.[
                exam
              ];

            return (
              cutoff &&
              rank <= cutoff
            );

          }
        );
    }

    colleges.sort(
      (a, b) =>
        b.rating -
        a.rating
    );

    colleges =
      colleges.slice(
        0,
        10
      );

    // Build AI Context

    const context =
      colleges
        .map(
          (college) => `
Name: ${college.name}
State: ${college.state}
Fees: ₹${college.fees}
Rating: ${college.rating}
NIRF Rank: ${college.nirfRank}
Average Package: ₹${college.placements?.averagePackage || 0}
Highest Package: ₹${college.placements?.highestPackage || 0}
`
        )
        .join("\n");

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
You are an expert Indian College Counselor.

Only recommend colleges from the provided database.

College Data:

${context}

For every answer:
1. Explain why the colleges match.
2. Mention fees.
3. Mention ratings.
4. Mention placements.
5. Give a final recommendation.
`,
            },
            {
              role:
                "user",
              content:
                message,
            },
          ],
        }
      );

    return res.status(200).json({
      success: true,

      reply:
        completion.choices[0]
          .message.content,

      colleges,
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