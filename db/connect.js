const mongoose = require('mongoose')



//const connectionString = 'mongodb+srv://sinharashi83:123@nodeexpress.qgbzelb.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify:false
    })
}


module.exports = connectDB 
