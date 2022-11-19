const knex = require('../../database/connection');

const getCarId = async (req, res) => {
    const { id } = req.params;

    try {
        const cars = await knex('carros').where('id', id);

        if (!cars) {
            return res.status(404).json('Carro não encontrado');
        };

        return res.status(200).json(cars[0]);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = getCarId;