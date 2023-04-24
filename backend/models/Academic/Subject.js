const mongoose = require("mongoose");

const { Schema } = mongoose;

const subjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            
        },
        description: {
            type: String,
            required: true,
        },
        teacher: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
        },
        academicTerm: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
        duration: {
            type: String,
            required: true,
            default: "3 months",
        },
    },
    { timestamps: true }
);

const Subejct = mongoose.model("SUbject", subjectSchema);

module.exports = Subejct;