const knex = require('../../database/connection');

const getAllSales = async (req, res) => {
    try {
        const sales = await knex('vendas');

        return res.status(200).json(sales);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = getAllSales;