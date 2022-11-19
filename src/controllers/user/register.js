const knex = require('../../database/connection');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        if (!nome || !email || !senha) {
            return res.status(400).json('Preencha todos os campos.');
        };

        const searchEmail = await knex('usuarios').select('email').where('email', email);

        if (searchEmail.length = 0) {
            return res.status(400).json('O e-mail já está cadastrado por outro usuário.')
        }
        const passwordEncrypted = await bcrypt.hash(senha, 10);

        const userData = { nome, email, senha: passwordEncrypted };
        
        const registration = await knex('usuarios').insert(userData);

        if (registration.length === 0) {
            return res.status(400).json('Usuário não cadastrado.');
        };

        return res.status(200).json('Usuário cadastrado com sucesso.');
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = registerUser