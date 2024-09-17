const axios = require("axios");

const listAPI = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;  // Return the data part of the response directly
    } catch (error) {
        console.error("Error fetching data from API:", error.message);
        throw new Error("Something went wrong while fetching data!");
    }
};

module.exports = { listAPI };
