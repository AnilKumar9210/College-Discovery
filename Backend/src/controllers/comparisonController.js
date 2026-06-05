import College from "../models/College.js";

export const compareColleges = async (
    req,
    res
) => {

    try {

        const { collegeIds } = req.body;

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

        return res.json({
            success: true,
            count: colleges.length,
            data: colleges
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};