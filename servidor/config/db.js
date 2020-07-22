;

'use strict'

const  mongoose  = require('mongoose'), {
    HOST_DB,
    USER_DB,
    PASS_DB,
    NAME_DB,
} = process.env
mongoUrl = `mongodb+srv://${USER_DB}:${PASS_DB}@${HOST_DB}/${NAME_DB}?retryWrites=true&w=majority`

let connection
let connectionDb = async() => {
    if (connection) return connection
    let cliente
    try {
        cliente = await mongoose.connect(mongoUrl, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
      
        console.log(`Conectado :* ${NAME_DB}`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
    return connection
}

module.exports = connectionDb

