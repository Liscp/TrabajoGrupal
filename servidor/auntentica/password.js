;
'use strict'

const bcrypt = require('bcrypt')


let codificar = (req, res, next) => {
    let data = req.body.data || null
    if (!data || !data.passw) {
        return res.status(401).send('usuario o contraseña invalidos')
    } else {
        let codificarpassword = bcrypt.hashSync(data.passw, bcrypt.genSaltSync(10))
        if (codificarpassword) {
            req.body.data.passw = codificarpassword
            req.body.data.createAt = new Date()
            req.body.data.sessionID = req.sessionID
            console.log(req.body.data.sessionID);
            next();
        } else {
            return res.status(401).send('contraseña no encriptada')
        }
    }
}

module.exports = { codificar }