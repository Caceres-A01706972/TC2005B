const express  = require('express');
const app = express();


app.get('/', (request, response) => {
    console.log("Hello");
    response.send("Hi")
})

app.listen(3000);