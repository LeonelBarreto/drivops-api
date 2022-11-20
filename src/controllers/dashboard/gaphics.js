const knex = require('../../database/connection');

const allGraphicsDashboard = async (req, res) => {
    try {
        const averageSalesByMonth = await knex.raw(`SELECT AVG(valor), EXTRACT(MONTH FROM data) as month, EXTRACT(YEAR FROM data) as year FROM vendas GROUP BY EXTRACT(MONTH FROM data), EXTRACT (YEAR FROM data)`);

        const avgSalesMonth = averageSalesByMonth.rows

        const topSellers = await knex.raw(`SELECT SUM(valor), vd.nome FROM vendas v INNER JOIN vendedores vd ON vd.id = v.vendedor_id GROUP BY vd.nome`);

        const rankSellers = topSellers.rows


        const allSalesByMonth = await knex.raw(`SELECT SUM(valor), EXTRACT(MONTH FROM data) as month, EXTRACT(YEAR FROM data) as year FROM vendas GROUP BY EXTRACT(MONTH FROM data), EXTRACT (YEAR FROM data)`);

        const salesMonth = allSalesByMonth.rows


        const allGrapichs = {
            avgSalesMonth,
            rankSellers,
            salesMonth
        };

        return res.status(200).json(allGrapichs)
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = allGraphicsDashboard;