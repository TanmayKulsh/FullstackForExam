const express = require('express');

const app = express();

app.get("/",(req,resp) => {
    resp.sendFile("page.html");
});




app.listen(5500);
console.log("Node server is running at port number 5500");