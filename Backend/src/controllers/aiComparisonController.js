import College from "../models/College.js";
import { getAIResponse }
    from "../services/geminiService.js";

export const compareCollegesAI =
    async (req, res) => {

        try {

            const { collegeIds } =
                req.body;

            if (
                !collegeIds ||
                collegeIds.length < 2
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Minimum 2 colleges required"

                });

            }

            const colleges =
                await College.find({

                    _id: {
                        $in: collegeIds
                    }

                });

            if (
                colleges.length < 2
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Colleges not found"

                });

            }

            const prompt = `

You are an expert college counselor.

Compare the following colleges.

Focus on:

1. Academic Reputation
2. Fees
3. Placements
4. ROI
5. Campus Life
6. Top Courses
7. Which students should choose which college

College Data:

${JSON.stringify(
                colleges,
                null,
                2
            )}

Provide:

Pros
Cons
Winner
Final Recommendation

`;

            const response =
                await getAIResponse(
                    prompt
                );

            return res.status(200).json({

                success: true,

                comparison:
                    response

            });

        }
        catch (error) {

            return res.status(500).json({

                success: false,

                message: error.message

            });

        }

    };