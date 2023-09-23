// routes/upload.js
const multer = require('multer');
const File = require('../../models/FileUpload');
const User = require('../../models/User');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = function (app) {
    app.post('/upload', upload.single('file'), async (req, res) => {
        try {
            const { originalname, mimetype, buffer, size } = req.file;
            const { username, email } = req.body;

            // Check if the user with the provided email exists
            let user = await User.findOne({ email });

            if (!user) {
                // Create and save the user if they don't exist
                user = new User({
                    username: username || 'local',
                    email: email || 'local',
                });

                await user.save();
            }

            // Create and save the file with a reference to the user's ID
            const newFile = new File({
                filename: originalname,
                type: mimetype,
                size: size,
                data: buffer,
                uploadDate: new Date(),
                createdBy: user._id,
            });

            await newFile.save();

            console.log('User and File linked successfully:', newFile);

            res.status(201).json({ message: 'File uploaded successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error uploading file' });
        }
    });

};
