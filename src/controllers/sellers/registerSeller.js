const knex = require('../../database/connection');

const registerSeller = async (req, res) => {
    const { nome } = req.body;

    try {
        const seller = await knex('vendedores').insert({ nome }).returning('*');

        if (!seller) {
            return res.status(400).json('O vendedor não foi cadastrado.');
        };

        return res.status(200).json(seller);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = registerSeller;