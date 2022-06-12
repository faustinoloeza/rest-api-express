const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('DB is connected');
}
    catch (error) {
        console.log(error);
    }
}

module.exports ={
    dbConection
}