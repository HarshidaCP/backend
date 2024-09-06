var Mongoose = require('mongoose')

Mongoose.connect('mongodb+srv://cpharshida:harshida@cluster0.ejkhy.mongodb.net/ccsit?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log(' db Connected ')
    })
    .catch((err) => {
    console.log(err)
})