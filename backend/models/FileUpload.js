const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    filename: String,
    type: String,
    size: Number,
    data: Buffer,
    uploadDate: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
    },
});

fileSchema.index({ filename: 1 });
fileSchema.index({ type: 1 });
fileSchema.index({ uploadDate: 1 });

const File = mongoose.model('File', fileSchema);

module.exports = File;
