const knex = require('../../database/connection');

const avgSalesByMonth = async (req, res) => {
    try {
        const averageSalesByMonth = knex.row(`SELECT AVG(valor), EXTRACT(MONTH FROM data) as month, EXTRACT(YEAR FROM data) as year FROM vendas GROUP BY EXTRACT(MONTH FROM data), EXTRACT (YEAR FROM data)`);

        return res.status(200).json(averageSalesByMonth);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = avgSalesByMonth;