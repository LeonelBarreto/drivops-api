const knex = require('../../database/connection');

const registerCar = async (req, res) => {
    const { modelo, fabricante, estado, ano, valor } = req.body;

    try {
        const car = await knex('carros').insert({
            modelo,
            fabricante,
            estado,
            ano,
            valor
        }).returning('*');
    
        if (!car) {
            return res.status(400).json('O carro não foi cadastrado.');
        };

        return res.status(200).json(car);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = registerCar;