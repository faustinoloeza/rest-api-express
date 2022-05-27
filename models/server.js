const express = require('express');
require('dotenv').config();
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
        this.middleware();
    }

    routes(){
        this.app.use('/api/', require('../routes/api.routes'));
    }

    middleware(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.static('public'));
    }

    startServer(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }
}


module.exports = Server;