const { listAPI } = require("./listApi");
const express = require("express");
const { client } = require('../redisClient');
const router = express.Router();

router.get('/list', async (req, res) => {
    try {
        const cachedData = await client.get('_list');
        if (cachedData) {
            return res.json(JSON.parse(cachedData));
        }
        const data = await listAPI();
        await client.set('_list', JSON.stringify(data), {
            EX: 3000 / 100
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data from API" });
    }
});

module.exports = router;
