const express = require('express');
const app = express();

const port = process.env.PORT || 5050;

app.use("/api", require('./routes/api'));

app.listen(port, () => {
    console.log(`server running on ${port}`);
})