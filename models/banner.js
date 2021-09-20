const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter room description'],
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    isShow: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    }    
});

module.exports = mongoose.models.Banner || mongoose.model('Banner', bannerSchema);