const express = require('express');
// const routes = require
const mysql = require('mysql');
const Cors = require('cors');
const app = express(); 

const db = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: 'password',
    database: 'sahu'
})

// app.use(function (req,res,next){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
//     res.setHeader('Access-Control-Allow-Headers','Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials',true);
//     next();
// })

// app.use(Cors('*'));

app.get("/", (req,resp) => {
    resp.send("<h1>Welcome to beckend of the server<h1>");
});

app.get("/auth/:prn/:psd",(req,resp) => {
    let sql = `select * from auth where prn = ${req.params.prn} and password = ${req.params.psd}`;
    console.log(req.params.prn);
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        // resp.send(result);

        
        if(result[0] == null){
            console.log("Wrong Fuckin PAssword");
            resp.send("denied");
        }
        else {
            let sql = `select * from studData where prn = ${req.params.prn}`;
            db.query(sql,(err,result) => {
                if(err) throw err;
                console.log(result);
                resp.send(result);
            });
        }
    })
})

app.get("/register/:prn/:password/:name/:course/:phone/:marks/:date",(req,resp) => {
    let sql1 = `insert into auth values(${req.params.prn},${req.params.password})`
    let sql2 = `insert into studData values(${req.params.prn},${req.params.name},${req.params.course},${req.params.phone},${req.params.marks},${req.params.date})`
    db.query(sql1,(err,result) => {
        if(err) throw err;
        console.log(result);
    })
    db.query(sql2,(err,result) => {
        if(err) throw err;
        console.log(result);
    })
    resp.send("Added Success");
})
// insert into studData values("111222333","Tanmay Kulshrestha","PG-DAC","9649211123",91.00,"2000-01-20");


app.listen(4000, () => {
    console.log("server is using port 4000");
});

// select * from auth where prn = "111222333" and password = "tanmay";
