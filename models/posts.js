const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter room description'],
    },
    description: {
        type: String,
        required: [true, 'Please enter room description'],
    },
    content: {
        type: String,
        required: [true, 'Please enter room description'],
    },    
    images: [
        {
            title: String,
            urlImage: String
        }
    ],
    isActive: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    }    
});

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);