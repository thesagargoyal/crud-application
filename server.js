const express = require('express');
const app = express();
const dotenv=require('dotenv');
const morgan=require("morgan");
const bodyparser=require("body-parser");
const path=require("path");
const bodyParser = require('body-parser');

dotenv.config({path:"config.env"});

const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

// app.set('views',path.resolve(__dirname,"views"));

app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//load routers
app.use("/",require("./server/routes/router"));

app.listen(PORT, ()=>{
    console.log(`Application started successfully on port`);
});
