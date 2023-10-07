const mongoose = require('mongoose');

const mongodbUri = "mongodb://127.0.0.1:27017/library";


mongoose.connect(mongodbUri)
    .then(() => {
        console.info(`database is connected ${mongodbUri}`)
    })
    .catch( error => console.error(`database is not connected ${mongodbUri}`))

