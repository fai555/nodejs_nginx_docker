const express = require("express")

const app = express()

const PORT = 4000;

app.get("/", (req,res)=> res.send("Alhamdulillah"))

app.listen(PORT, '0.0.0.0')