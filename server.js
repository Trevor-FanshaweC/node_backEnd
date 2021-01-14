const express = require('express');
const app = express();

const port = process.env.PORT || 5050;

app.get("/api", (req, res) => {
    res.json({message: "hello, you're using the API"});
})

app.get("/api/users", (req, res) => {
    console.log('all users');
    res.json({message: "get all users"})
})

app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id);
    res.json({message: "get a user"});
})

app.get("/coins/markets", (req, res) => {
    console.log('hit test route');
    //console.log(req);
    res.json({message: "test route"});
})

app.listen(port, () => {
    console.log(`server running on ${port}`);
})