import User from "../models/Users.js";
import College from "../models/College.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingUser =
            await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            }
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const signin = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user =
            await User.findOne({ email });

        if (
            user &&
            await user.matchPassword(password)
        ) {

            return res.json({
                success: true,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user._id)
                }
            });

        }

        return res.status(401).json({
            success: false,
            message: "Invalid credentials"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const getMe = async (req, res) => {

    try {

        const user =
            await User.findById(req.userId)
                .populate("savedColleges")
                .populate("savedComparisons");

        return res.json({
            success: true,
            data: user
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const saveCollege = async (req, res) => {

    try {

        const { collegeId } = req.params;

        const college =
            await College.findById(collegeId);

        if (!college) {
            return res.status(404).json({
                success: false,
                message: "College not found"
            });
        }

        const user =
            await User.findById(req.userId);

        const exists =
            user.savedColleges.includes(collegeId);

        if (!exists) {
            user.savedColleges.push(collegeId);
            await user.save();
        }

        return res.json({
            success: true,
            message: "College saved"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const unsaveCollege = async (req, res) => {

    try {

        const { collegeId } = req.params;

        const user =
            await User.findById(req.userId);

        user.savedColleges =
            user.savedColleges.filter(
                id => id.toString() !== collegeId
            );

        await user.save();

        return res.json({
            success: true,
            message: "College removed"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const saveComparison = async (req, res) => {

    try {

        const { collegeIds } = req.body;

        if (
            !collegeIds ||
            !Array.isArray(collegeIds) ||
            collegeIds.length < 2
        ) {
            return res.status(400).json({
                success: false,
                message: "Minimum 2 colleges required"
            });
        }

        const user =
            await User.findById(req.userId);

        user.savedComparisons.push(collegeIds);

        await user.save();

        return res.json({
            success: true,
            message: "Comparison saved"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};