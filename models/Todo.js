const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: String,
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        enum: ['Shopping', 'Work', 'Personal'],
        trim: true,
    }
}, { timestamps: true });



module.exports = mongoose.model('Todo', todoSchema);
