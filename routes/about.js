const express = require("express");
const router = express.Router();

const info = {
    name: "Travis Brickle",
    age: 27,
    occupation: "Taxi Driver",
    clothing: "Green Military Jacket",
};

router.get("/", (_, res) => {
    res.render("about", { info: info });
});

module.exports = router;
