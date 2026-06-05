import College from "../models/College.js";

export const recommendColleges =
    async (req, res) => {

        try {

            const {
                exam,
                rank,
                preferredState,
                maxFees
            } = req.body;

            const colleges =
                await College.find();

            const recommendations =
                colleges.filter(college => {

                    const cutoff =
                        college.examCutoffs?.get(exam);

                    if (
                        cutoff === undefined
                    ) {
                        return false;
                    }

                    const rankMatch =
                        Number(rank) <= cutoff;

                    const stateMatch =
                        preferredState
                            ? college.state === preferredState
                            : true;

                    const feeMatch =
                        maxFees
                            ? college.fees <= maxFees
                            : true;

                    return (
                        rankMatch &&
                        stateMatch &&
                        feeMatch
                    );

                });

            recommendations.sort(
                (a, b) =>
                    b.rating - a.rating
            );

            return res.json({

                success: true,

                count:
                    recommendations.length,

                data:
                    recommendations

            });

        }
        catch (error) {

            return res.status(500).json({

                success: false,

                message: error.message

            });

        }

    };