const knex = require('../../database/connection');

const registerSale = async (req, res) => {
    const { modelo_id, vendedor_id, data, valor } = req.body;

    try {
        const searchCar = await knex('carros').where({id: modelo_id}).first();

        if(!searchCar) {
            return res.status(404).json('Carro não encontrado.');
        };
        console.log(searchCar);

        const searchSeller = await knex('vendedores').where({id: vendedor_id}).first();

        if(!searchSeller) {
            return res.status(404).json('Vendedor não encontrado.');
        };
        console.log(searchSeller);

        const sale = await knex('vendas').insert({
            modelo_id,
            vendedor_id,
            data,
            valor
        }).returning('*');

        console.log(sale);
        
        if (!sale) {
            return res.status(400).json('A venda não foi cadastrada.');
        };

        return res.status(200).json(sale);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = registerSale;