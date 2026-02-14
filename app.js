const Express = require("express");
const app = Express();

app.get("/", (_, res) => {
    res.send("Hello world");
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Server up and running at port 3000");
});
