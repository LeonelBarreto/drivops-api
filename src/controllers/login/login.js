require('dotenv').config();
const knex = require('../../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await knex('usuarios').where({ email }).first();

        if (!usuario) {
            return res.status(400).json('Usuário não cadastrado.');
        };

        const verifyPassword = await bcrypt.compare(senha, usuario.senha);

        if (!verifyPassword) {
            return res.status(400).json('A senha está incorreta.');
        };

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '6h' });

        return res.status(200).json({
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
            },
            token,
        });
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = login;