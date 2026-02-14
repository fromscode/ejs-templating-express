const Express = require("express");
const path = require("node:path");
const app = Express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (_, res) => {
    res.render("index", { message: "EJS Rocks!" });
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Server up and running at port 3000");
});
