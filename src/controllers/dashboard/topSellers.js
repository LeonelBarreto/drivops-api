const knex = require('../../database/connection');

const rankingSellers = async (req, res) => {
    try {
        const topSellers = await knex.raw(`SELECT SUM(valor), vd.nome FROM vendas v INNER JOIN vendedores vd ON vd.id = v.vendedor_id GROUP BY vd.nome ORDER BY SUM(valor) DESC LIMIT 5`);

        const rankSellers = topSellers.rows

        return res.status(200).json(rankSellers)
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = rankingSellers;