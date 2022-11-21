const knex = require('../../database/connection');

const avgSalesMonth = async (req, res) => {
    try {
        const averagedSalesByMonth = await knex.raw(`SELECT AVG(valor), EXTRACT(MONTH FROM data) as month, EXTRACT(YEAR FROM data) as year FROM vendas GROUP BY EXTRACT(MONTH FROM data), EXTRACT (YEAR FROM data)`);

        const averageSalesMonth = averagedSalesByMonth.rows

        return res.status(200).json(averageSalesMonth)
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = avgSalesMonth;