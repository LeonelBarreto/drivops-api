const knex = require('../../database/connection');

const salesByMonth = async (req, res) => {
    try {
        const allSalesByMonth = knex.row(`SELECT SUM(valor), EXTRACT(MONTH FROM data) as month, EXTRACT(YEAR FROM data) as year FROM vendas GROUP BY EXTRACT(MONTH FROM data), EXTRACT (YEAR FROM data)`);

        return res.status(200).json(allSalesByMonth);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = salesByMonth;