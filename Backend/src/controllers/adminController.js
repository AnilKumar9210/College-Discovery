import College from "../models/College.js";

export const createCollege =
    async (req, res) => {

        try {

            const college =
                await College.create(
                    req.body
                );

            return res.status(201).json({

                success: true,

                data: college

            });

        }
        catch (error) {

            return res.status(500).json({

                success: false,

                message: error.message

            });

        }

    };

export const updateCollege =
    async (req, res) => {

        try {

            const college =
                await College.findByIdAndUpdate(

                    req.params.id,

                    req.body,

                    {
                        new: true,
                        runValidators: true
                    }

                );

            return res.json({

                success: true,

                data: college

            });

        }
        catch (error) {

            return res.status(500).json({

                success: false,

                message: error.message

            });

        }

    };
export const deleteCollege =
    async (req, res) => {

        try {

            const college =
                await College.findByIdAndDelete(
                    req.params.id
                );

            if (!college) {

                return res.status(404).json({

                    success: false,

                    message:
                        "College not found"

                });

            }

            return res.status(200).json({

                success: true,

                message:
                    "College deleted successfully"

            });

        }
        catch (error) {

            return res.status(500).json({

                success: false,

                message: error.message

            });

        }

    };


    export default {
    createCollege,
    updateCollege,
    deleteCollege
    };