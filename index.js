const express = require('express');
const dotenv = require('dotenv');
const { connectToRedis, client } = require("./redisClient");
const routes = require('./routes/route'); // Import routes from the correct file

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

const startServer = async () => {
    try {
        await connectToRedis();
        app.use('/', routes); // Assuming routes should be mounted at /api

        // Start server
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Server Error:', error);
    }
};

startServer();
