const fs = require("fs")
const ejs = require("ejs")

fs.readdirSync("views/").forEach(f => f.endsWith(".ejs") && write("views/"+f, "public/"+f.slice(0,-4)+".html"))

function write(inp,out) {
  ejs.renderFile(inp, null, {rmWhitespace: true}, (e, html) => {
    if (e) return console.error("Error "+out, e)
    fs.writeFileSync(out, html, "utf-8")
    console.log("Completed "+out)
  })
}