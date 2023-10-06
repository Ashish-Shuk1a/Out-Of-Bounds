require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const projRoute = require('./routes/projectroutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use((req,res,next) => {
    console.log(req.path,req.method);
    next();
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    
    .catch((error) => {
        console.log(error);
    });

    app.get('/', (req,res) => {
        if(mongoose.connection.readyState !== 1){
            res.status(500).json({
                "status": "error",
                "message": "Not connected to MongoDB"
            });
        }
        else{
            res.status(200).json({
                "status": "ok",
                "message": "Connected to MongoDB"
            });
        }
    });

app.use('/api',projRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})

module.exports = app;
