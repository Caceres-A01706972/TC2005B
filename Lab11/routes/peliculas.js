const express = require('express');
const router = express.Router()


router.get("/", (request, response) => {
    response.send("Peliculas List");
});

router.get("/new", (request, response) => {
    response.send("Peliculas New Form");
});

module.exports = router;