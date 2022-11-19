const knex = require('../../database/connection');

const getSellerId = async (req, res) => {
    const { id } = req.params;

    try {
        const sellers = await knex('vendedores').where('id', id);

        if (!sellers) {
            return res.status(404).json('Vendedor não encontrado.');
        };

        return res.status(200).json(sellers[0]);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = getSellerId;