import User from "../models/Users.js";

export const updateStudentProfile =
    async (req, res) => {

        try {

            const {
                exam,
                rank,
                preferredState,
                preferredBranch,
                budget
            } = req.body;

            const user =
                await User.findById(
                    req.userId
                );

            if (!user) {

                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });

            }

            user.studentProfile = {

                exam,
                rank,
                preferredState,
                preferredBranch,
                budget

            };

            await user.save();

            return res.status(200).json({

                success: true,

                message:
                    "Student profile updated",

                data: user.studentProfile

            });

        }
        catch (error) {

            return res.status(500).json({

                success: false,
                message: error.message

            });

        }

    };

export const getStudentProfile =
    async (req, res) => {

        try {

            const user =
                await User.findById(
                    req.userId
                );

            return res.status(200).json({

                success: true,

                data: user.studentProfile

            });

        }
        catch (error) {

            return res.status(500).json({

                success: false,
                message: error.message

            });

        }

    };