const knex = require('../../database/connection');

const getSaleId = async (req, res) => {
    const { id } = req.params;

    try {
        const sales = await knex('vendas').where('id', id);

        if (!sales) {
            return res.status(404).json('Vendas não encontradas');
        };

        return res.status(200).json(sales[0]);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = getSaleId;