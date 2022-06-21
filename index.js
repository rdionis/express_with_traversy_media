const express = require("express")
const path = require("path")
const exphbs = require("express-handlebars")
//const logger = require("./middleware/logger")

const app = express()

//app.get("/", (req, res) => {
    //res.send("<h1>Hello, World!!!!!!</h1>")
  //  res.sendFile(path.join(__dirname, "public", "index.html"))
    //not an ideal way to load html files, because we'd have to write each route manually and separatelly for every single page
//})

// *********** MIDDLEWARE ***********

// creating a simple logging middleware function
// every time we make a request, this middleware is gonna run


// *********** INIT MIDDLEWARE ***********
// app.use(logger)


// HANDLEBARS MIDDLEWARE
// we need the two following lines in order to use handlebars
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars")



// BODY PARSER MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// HOMEPAGE ROUTE
app.get("/", (req, res) => res.render("index", {
  title: "Members App"
}))

// SET STATIC SERVER
app.use(express.static(path.join(__dirname, "public")))





// Members API routes
app.use("/api/members", require("./routes/api/members"))


// *********** ASSIGNING THE PORT TO A VARIABLE ***********

const PORT = process.env.PORT || 5000

// when we deploy, the server will likely have the port in an environment variable, so we will want to check that first and if that is not available, then we will want to run on PORT 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))