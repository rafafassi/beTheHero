const connection = require('../database');

module.exports = {
    async create(req, res){
        const { login } = req.body;
        const { password } = req.body;

        const ong = await connection('ongs')
            .where('login', login)
            .where('password', password)
            .select('name', 'id')
            .first();

        if (!ong) {
            return res.status(400).json({error: 'No ONG with this ID!'})
        }else{
            return res.json(ong);
        }
    }
}