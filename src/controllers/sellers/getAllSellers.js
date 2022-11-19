const knex = require('../../database/connection');

const getAllSellers = async (req, res) => {
    try {
        const sellers = await knex('vendedores');

        return res.status(200).json(sellers);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = getAllSellers;