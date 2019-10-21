const express = require("express");
const parser = require("body-parser")
const cors = require("cors")
const app = express();


// Add routes
// const jobsRouter = require("./routes/jobs")
// const skillsRouter = require("./routes/skills")
// const onetRouter = require("./routes/onet")

app.use(cors())
app.use(parser.urlencoded({extended: true}));
app.use(parser.json())

// Add paths

// app.use('/', jobsRouter)
// app.use("/skills", skillsRouter)
// app.use("/onet", onetRouter)



app.set("port", process.env.PORT || 2323);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

