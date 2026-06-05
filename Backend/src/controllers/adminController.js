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