const express = require('express');

const app = express();

const cors = require('cors');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'})


require('./dataBase/MyDataBase');

app.use(express.json());    // converting express.json format data into object
app.use( cors () );

app.use(require('./router/user'));

const PORT=process.env.PORT; 


app.listen(PORT, () =>{
    console.log('Server started');
})