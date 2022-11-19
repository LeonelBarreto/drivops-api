const knex = require('../../database/connection');

const getAllCars = async (req, res) => {
    try {
        const cars = await knex('carros');

        return res.status(200).json(cars);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = getAllCars;