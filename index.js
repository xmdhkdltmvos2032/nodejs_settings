const express = require("express");
const app = express();
const port = 4000;
const routerModule = require("./router/router");
const mysql = require("mysql");

app.set("view engine","ejs");
app.use(routerModule);
app.use(express.static(__dirname+"/public/css"));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.listen(port,()=>{
    console.log(`${port} start!!!`);
})


