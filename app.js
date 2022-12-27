const path = require('path');
const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use("/images", express.static(path.join(__dirname, "public/images/")))
app.use("/fonts", express.static(path.join(__dirname, "public/fonts/")))
app.use("/scripts", express.static(path.join(__dirname, "public/scripts/")))
app.use("/out.css", express.static(path.join(__dirname, "public/out.css")))

fs.readdirSync("views/").forEach(f => f.endsWith(".ejs") && app.get("/"+f.slice(0,-4), (req,res) => res.render(path.join(__dirname, "views/"+f))))
app.get("/", (req,res) => res.redirect("/index"))

app.listen(port, () => console.log("App Up and Running."))