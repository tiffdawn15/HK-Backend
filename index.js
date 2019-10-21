const express = require("express");
const parser = require("body-parser")
const cors = require("cors")
const app = express();


// Add routes
const articlesRouter = require("./routes/articles")


//Connecting to mongoose

const mongoose = require("mongoose")


app.use(cors())
app.use(parser.urlencoded({extended: true}));
app.use(parser.json())

// Add paths

app.use('/', articlesRouter)



app.set("port", process.env.PORT || 2020);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

