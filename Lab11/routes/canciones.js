const express = require('express');
const router = express.Router()


router.get("/", (request, response) => {
    response.send("Canciones List");
});

router.get("/new", (request, response) => {
    response.send("Canciones New Form");
});

module.exports = router;