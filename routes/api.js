const express = require('express');
const router = express.Router();
const sql = require('mysql');
const sqlConf = require("../config/sqlConfig");

const connect = sql.createPool(sqlConf.config);

router.get("/", (req, res) => {
    res.json({message: "hello, you're using the API"});
})

router.get("/users", (req, res) => {
    console.log('all users');
    //res.json({message: "get all users"})

    connect.query('SELECT * FROM profdata', (err, rows) => {
        //connect.destroy(); // don't need the connection any more, we're done

        if (err) { throw err } // connection error

        console.log("results", rows);

        res.json(rows);
    })
})

router.get("/users/:id", (req, res) => {
    console.log(req.params.id);
    //res.json({message: "get a user"});

    connect.query(`SELECT * FROM profdata WHERE id="${req.params.id}"`, (err, rows) =>{
        if (err) { throw err; }

        console.log("prof:", rows);
        res.json(rows);
    })
})

router.post("/update", (req, res) => {
    console.log('hit the post route');

    connect.query("INSERT INTO profdata (name, nickname, role, avatar) VALUES ('Marco', 'mini-me', 'prof', 'marco.jpg')", (err, rows) => {
        if (err) { throw err; }

        res.json({messge: "insert successful", row: rows.insertId});
    })
    
})

router.get("/coins/markets", (req, res) => {
    console.log('hit test route');
    //console.log(req);
    res.json({message: "test route"});
})

module.exports = router;