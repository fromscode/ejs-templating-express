const Express = require("express");
const path = require("node:path");
const app = Express();

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

const assetsPath = path.join(__dirname, "public");

const users = ["Rose", "Cake", "Biff"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(Express.static(assetsPath));

app.get("/", (_, res) => {
    res.render("index", { message: "EJS Rocks!", links: links, users: users });
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Server up and running at port 3000");
});
