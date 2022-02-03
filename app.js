const express= require('express');
const mongoose= require('mongoose');
const morgan = require('morgan');
const userRoutes =require('./routes/intex.router');
const app = express();

app.use(express.json());

app.use(morgan('dev'));

const aa = app.use(express.json());
require("./routes/intex.router")(aa)
// app.use('/',userRoutes);


const PORT=process.env.PORT ||3000
app.listen(PORT, ()=>{
    console.log(`Serve start on On ${PORT}`);
});


mongoose.connect("mongodb://localhost:27017/UserDetails",(err)=>{
    if(err)
    {
        console.log('DB is not connected')
    }
    console.log('DB is connected');

});
