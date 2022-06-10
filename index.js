const express = require("express")
const path = require("path")

const app = express()

//app.get("/", (req, res) => {
    //res.send("<h1>Hello, World!!!!!!</h1>")
  //  res.sendFile(path.join(__dirname, "public", "index.html"))
    //not an ideal way to load html files, because we'd have to write each route manually and separatelly for every single page
//})

// *********** CREATING A ROUTE ***********

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    status: "active"
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    status: "active"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    status: "active"
  }
 ,
]

app.get("/api/members", (req, res) => {
    res.json()

    JSON.stringify
    //we don't need to do JSON.stringify() even though these are JS objects, because express takes care of that





    


})




// *********** SET STATIC SERVER ***********

app.use(express.static(path.join(__dirname, "public")))


// *********** ASSIGNING THE PORT TO A VARIABLE ***********

const PORT = process.env.PORT || 5000

// when we deploy, the server will likely have the port in an environment variable, so we will want to check that first and if that is not available, then we will want to run on PORT 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))