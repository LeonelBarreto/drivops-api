const knex = require('../../database/connection');

const rankingSellers = async (req, res) => {
    try {
        const topSellers = knex.row(`SELECT SUM(valor), vd.nome FROM vendas v INNER JOIN vendedores vd ON vd.id = v.vendedor_id GROUP BY vd.nome`);

        return res.status(200).json(topSellers);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = rankingSellers;