import Question from "../models/Questions.js";

export const getQuestions = async (
    req,
    res
) => {

    try {

        const questions =
            await Question.find()
                .populate(
                    "user",
                    "name"
                )
                .populate(
                    "answers.user",
                    "name"
                )
                .sort({
                    createdAt: -1
                });

        return res.status(200).json({
            success: true,
            count: questions.length,
            data: questions
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


export const createQuestion = async (
    req,
    res
) => {

    try {

        const { questionText } =
            req.body;

        if (!questionText) {

            return res.status(400).json({
                success: false,
                message:
                    "Question text required"
            });

        }

        const question =
            await Question.create({

                questionText,

                user: req.userId

            });

        return res.status(201).json({
            success: true,
            data: question
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


export const addAnswer = async (
    req,
    res
) => {

    try {

        const { answerText } =
            req.body;

        const question =
            await Question.findById(
                req.params.id
            );

        if (!question) {

            return res.status(404).json({
                success: false,
                message:
                    "Question not found"
            });

        }

        question.answers.push({

            answerText,

            user: req.userId

        });

        await question.save();

        return res.status(200).json({
            success: true,
            message:
                "Answer added successfully",
            data: question
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};