const express = require("express")
const uuid = require("uuid")
const router = express.Router()
const members = require("../../Members")


// *********** CREATING A ROUTE ***********

// get all members
// app.get("/api/members", (req, res) => res.json(members))
router.get("/", (req, res) => res.json(members))

//we don't need to do JSON.stringify() even though these are JS objects, because express takes care of that

// get single member
//app.get("/api/members/:id", (req, res) => {
router.get("/:id", (req, res) => {
  // res.send(req.params.id) // just returns the id number
  const found = members.some(member => member.id === parseInt(req.params.id)) // if it doesn't exist, it will equal false, if it exists, it will equal true
  //res.json(members.filter(member => member.id === parseInt(req.params.id)))
  //getting a member by their id
  //id is a URL parameter
  ROUTE   
  found
  ? res.json(members.filter(member => member.id === parseInt(req.params.id)))
  : res.status(400).json({msg: `No member with the ID of ${req.params.id}`})

})

// *********** CREATING A MEMBER ***********

//to create something, you usually need a post request

// router.post("/", (req, res) => {
//     res.send(req.body)
// })

router.post("/", (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }
    !newMember.name || !newMember.email
    ? res.status(400).json({msg: "Please include name and email"})
    : (members.push(newMember)) && res.json(members)
    

})

module.exports = router