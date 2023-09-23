// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

const baseUrl = "http://localhost:3000";

require('./components/database/dbConfig.js'); // MongoDB connection
require('./components/routes/upload')(app); // File upload route
require('./components/routes/files')(app, baseUrl); // File listing and download routes

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
