import College from "../models/College.js";
import User from "../models/Users.js";
import { getAIResponse }
from "../services/geminiService.js";

export const chatWithAI = async (
    req,
    res
) => {

    try {

        const { message } =
            req.body;

        if (!message) {

            return res.status(400).json({

                success: false,

                message:
                    "Message is required"

            });

        }

        const user =
            await User.findById(
                req.userId
            );

        if (!user) {

            return res.status(404).json({

                success: false,

                message:
                    "User not found"

            });

        }

        const profile =
            user.studentProfile || {};

        let colleges = [];

        /*
         * Personalized Retrieval
         */

        if (
            profile.exam &&
            profile.rank
        ) {

            const allColleges =
                await College.find();

            colleges =
                allColleges.filter(
                    college => {

                        const cutoff =
                            college.examCutoffs?.get(
                                profile.exam
                            );

                        if (
                            cutoff === undefined ||
                            cutoff === null
                        ) {
                            return false;
                        }

                        return (
                            profile.rank <= cutoff
                        );

                    }
                );

        } else {

            colleges =
                await College.find()
                    .limit(20);

        }

        /*
         * Apply Additional Filters
         */

        if (profile.preferredState) {

            colleges =
                colleges.filter(
                    college =>
                        college.state
                            ?.toLowerCase() ===
                        profile.preferredState
                            ?.toLowerCase()
                );

        }

        if (profile.budget) {

            colleges =
                colleges.filter(
                    college =>
                        college.fees <=
                        profile.budget
                );

        }

        /*
         * Sort Best Colleges First
         */

        colleges.sort(
            (a, b) =>
                b.rating - a.rating
        );

        /*
         * Reduce Prompt Size
         */

        const relevantColleges =
            colleges
                .slice(0, 15)
                .map(college => ({

                    name:
                        college.name,

                    state:
                        college.state,

                    rating:
                        college.rating,

                    fees:
                        college.fees,

                    averagePackage:
                        college.placements
                            ?.averagePackage,

                    highestPackage:
                        college.placements
                            ?.highestPackage,

                    cutoff:
                        profile.exam
                            ? college.examCutoffs?.get(
                                  profile.exam
                              )
                            : null

                }));

        const prompt = `

You are an expert Indian College Counselor.

Use ONLY the provided college data.

-----------------------------------

STUDENT PROFILE

Exam:
${profile.exam || "Not Provided"}

Rank:
${profile.rank || "Not Provided"}

Preferred Branch:
${profile.preferredBranch || "Not Provided"}

Preferred State:
${profile.preferredState || "Not Provided"}

Budget:
${profile.budget || "Not Provided"}

-----------------------------------

USER QUESTION

${message}

-----------------------------------

COLLEGE DATA

${JSON.stringify(
    relevantColleges,
    null,
    2
)}

-----------------------------------

Instructions:

1. Answer using only provided data.
2. Recommend suitable colleges.
3. Explain why.
4. Mention fees and placements when relevant.
5. If data is unavailable, say so.
6. Keep response concise and student-friendly.

`;

        const response =
            await getAIResponse(
                prompt
            );

        return res.status(200).json({

            success: true,

            profileUsed:
                profile,

            collegesFound:
                colleges.length,

            response

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};