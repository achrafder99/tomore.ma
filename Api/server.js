const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connect = require("./connect/connect");
const router = require("./routes/AddProduct");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT | 8080;
app.use(express.static("public"));


// parse application/json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use(
    cors({
        origin: "*",
        credentials: true, //access-control-allow-credentials:true
        optionSuccessStatus: 200,
    })
);

app.use("/", router);
app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`server running at localhost http://localhost:${PORT}`);
});