import College from "../models/College.js";

export const getDashboard = async (
    req,
    res
) => {

    try {

        const {
            exam,
            rank,
            preferredState,
            maxFees,
            page = 1,
            limit = 10
        } = req.body;

        if (!exam || !rank) {

            return res.status(400).json({
                success: false,
                message:
                    "Exam and rank are required"
            });

        }

        const colleges =
            await College.find();

        const recommendations =
            colleges
                .filter(college => {

                    const cutoff =
                        college.examCutoffs?.[exam];

                    if (
                        cutoff === undefined ||
                        cutoff === null
                    ) {
                        return false;
                    }

                    const rankMatch =
                        Number(rank) <= cutoff;

                    const stateMatch =
                        preferredState
                            ? college.state
                                  .toLowerCase() ===
                              preferredState
                                  .toLowerCase()
                            : true;

                    const feeMatch =
                        maxFees
                            ? college.fees <= Number(maxFees)
                            : true;

                    return (
                        rankMatch &&
                        stateMatch &&
                        feeMatch
                    );

                })
                .map(college => {

                    let score = 0;

                    score +=
                        college.rating * 20;

                    score +=
                        (
                            college.examCutoffs[
                                exam
                            ] -
                            rank
                        ) / 100;

                    return {
                        ...college.toObject(),
                        recommendationScore:
                            score
                    };

                })
                .sort(
                    (a, b) =>
                        b.recommendationScore -
                        a.recommendationScore
                );

        const start =
            (page - 1) * limit;

        const paginated =
            recommendations.slice(
                start,
                start + Number(limit)
            );

        return res.status(200).json({

            success: true,

            total:
                recommendations.length,

            page:
                Number(page),

            limit:
                Number(limit),

            data:
                paginated

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};