import College from "../models/College.js";
import Chat from "../models/Chat.js";
import User from "../models/Users.js"

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

export const getDashboardStats =
    async (req, res) => {
        try {

            const users =
                await User.countDocuments();

            const colleges =
                await College.countDocuments();

            const chats =
                await Chat.countDocuments();

            const savedColleges =
                await User.aggregate([
                    {
                        $project: {
                            totalSaved: {
                                $size: "$savedColleges",
                            },
                        },
                    },
                    {
                        $group: {
                            _id: null,
                            total: {
                                $sum: "$totalSaved",
                            },
                        },
                    },
                ]);

            return res.status(200).json({
                success: true,

                data: {
                    users,
                    colleges,
                    chats,

                    savedColleges:
                        savedColleges[0]
                            ?.total || 0,
                },
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


    export const getAllColleges =
  async (req, res) => {

    try {

      const colleges =
        await College.find()
          .sort({
            createdAt: -1,
          });

      return res.json({
        success: true,
        data: colleges,
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }

  };


export default {
    createCollege,
    updateCollege,
    deleteCollege,
    getDashboardStats,
    getAllColleges
};