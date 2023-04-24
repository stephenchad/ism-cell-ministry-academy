const mongoose = require("mongoose");

const { Schema } = mongoose;

const questionSchema = new Schema(
    {
        question: {
            type: String,
            required: true
        },
        optionA: {
            type: String,
            required: true
        },
        optionB: {
            type: String,
            required: true
        },
        optionC: {
            type: String,
            required: true
        },
        optionD: {
            type: String,
            required: true
        },
        correctAnswer: {
            type: String,
            required: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;