import College from "../models/College.js";

export const getColleges = async (req, res) => {

    try {

        const page =
            Number(req.query.page) || 1;

        const limit =
            Number(req.query.limit) || 10;

        const skip =
            (page - 1) * limit;

        const {
            location,
            minFees,
            maxFees,
            minRating,
            search
        } = req.query;

        const filter = {};

        if (location) {
            filter.location = {
                $regex: location,
                $options: "i"
            };
        }

        if (search) {
            filter.name = {
                $regex: search,
                $options: "i"
            };
        }

        if (minRating) {
            filter.rating = {
                $gte: Number(minRating)
            };
        }

        if (minFees || maxFees) {

            filter.fees = {};

            if (minFees) {
                filter.fees.$gte =
                    Number(minFees);
            }

            if (maxFees) {
                filter.fees.$lte =
                    Number(maxFees);
            }

        }

        const total =
            await College.countDocuments(
                filter
            );

        const colleges =
            await College.find(filter)
                .skip(skip)
                .limit(limit)
                .sort({
                    rating: -1
                });

        return res.status(200).json({
            success: true,
            data: colleges,
            pagination: {
                page,
                limit,
                total,
                totalPages:
                    Math.ceil(total / limit)
            }
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


export const getCollegeById = async (req, res) => {

    try {

        const college =
            await College.findById(
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
            data: college
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


export const predictColleges = async (
    req,
    res
) => {

    try {

        const { exam, rank } =
            req.body;

        if (
            !exam ||
            rank === undefined
        ) {

            return res.status(400).json({
                success: false,
                message:
                    "Exam and rank are required"
            });

        }

        const colleges =
            await College.find();

        const matched =
            colleges.filter(college => {

                const cutoff =
                    college.examCutoffs?.get(exam);

                if (
                    cutoff === undefined ||
                    cutoff === null
                ) {
                    return false;
                }

                return Number(rank) <= cutoff;

            });

        matched.sort((a, b) => {

            const cutoffA =
                a.examCutoffs.get(exam);

            const cutoffB =
                b.examCutoffs.get(exam);

            return cutoffA - cutoffB;

        });

        return res.status(200).json({

            success: true,

            count: matched.length,

            data: matched

        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};