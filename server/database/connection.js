const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
//         DATABASE=mongodb+srv://admin:<PASSWORD>@cluster0.h9y4j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// DATABASE_LOCAL=mongodb://localhost:27017/mi-tramite
        const con = await mongoose.connect(process.env.DATABASE_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB