const express = require("express")
const path = require("path")
//const logger = require("./middleware/logger")
const members = require("./Members")

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


// *********** CREATING A ROUTE ***********

// get all members
app.get("/api/members", (req, res) => res.json(members))

//we don't need to do JSON.stringify() even though these are JS objects, because express takes care of that

// get single member
app.get("/api/members/:id", (req, res) => {
  // res.send(req.params.id) // just returns the id number
  const found = members.some(member => member.id === parseInt(req.params.id)) // if it doesn't exist, it will equal false, if it exists, it will equal true
  //res.json(members.filter(member => member.id === parseInt(req.params.id)))
  //getting a member by their id
  //id is a URL parameter

  found
  ? res.json(members.filter(member => member.id === parseInt(req.params.id)))
  : res.status(400).json({msg: `No member with the ID of ${req.params.id}`})

})






// *********** SET STATIC SERVER ***********

app.use(express.static(path.join(__dirname, "public")))


// *********** ASSIGNING THE PORT TO A VARIABLE ***********

const PORT = process.env.PORT || 5000

// when we deploy, the server will likely have the port in an environment variable, so we will want to check that first and if that is not available, then we will want to run on PORT 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))