// routes/files.js
const File = require('../../models/FileUpload');
const User = require('../../models/User');

module.exports = function (app, baseUrl) {
    // API endpoint to list file information (filename and URL);
    app.get('/files', async (req, res) => {
        try {
            const files = await File.find({}, 'filename type');
            if (files.length === 0) {
                return res.status(400).json({ statusCode: "400", message: "No Files Found !" });
            }

            const fileData = files.map(file => ({
                filename: file.filename,
                url: `${baseUrl}/download/${file._id}`,
                type: file.type
            }));
            res.status(200).send({ statusCode: 200, message: "Files Fetched", files: fileData });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error listing files' });
        }
    });


    // API endpoint to download a file
    app.get('/download/:id', async (req, res) => {
        try {
            const fileId = req.params.id;
            const file = await File.findById(fileId);

            if (!file) {
                return res.status(404).json({ error: 'File not found' });
            }

            res.setHeader('Content-Disposition', `attachment; filename=${file.filename}`);
            res.setHeader('Content-Type', 'application/octet-stream');
            res.send(file.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error downloading file' });
        }
    });
};
