const express = require ("express");
const app = express();

const morgan= require("morgan");
const multer= require("multer");
const path = require("path");

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({extended: false }));

const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/uploads" ),
    filename: (req,file,cb)=>{
        cb(null, new Date().getTime()+ path.extname(file.originalname));
    }
});
app.use(multer({storage}).single("image"))

app.use(require("./routes/routes"))

app.get("/", (req, res)=>{
    console.log("En el server")
    res.send("Muy bien Rafa");
} )


module.exports = {app};