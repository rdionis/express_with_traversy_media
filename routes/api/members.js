const express = require("express")
const uuid = require("uuid")
const router = express.Router()
const members = require("../../Members")


// *********** CREATING A ROUTE ***********

// GET ALL MEMBERS
// app.get("/api/members", (req, res) => res.json(members))
router.get("/", (req, res) => res.json(members))

//we don't need to do JSON.stringify() even though these are JS objects, because express takes care of that

// GET SINGLE MEMBER
//app.get("/api/members/:id", (req, res) => {
  
  router.get("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id)) // if it doesn't exist, it will equal false, if it exists, it will equal true
  // res.send(req.params.id) // just returns the id number
  //res.json(members.filter(member => member.id === parseInt(req.params.id)))
  //getting a member by their id
  //id is a URL parameter
   
  found
  ? res.json(members.filter(member => member.id === parseInt(req.params.id)))
  : res.status(400).json({msg: `No member with the ID of ${req.params.id}`})

})

// *********** CREATING A MEMBER ***********

//to create something, you usually need a POST request

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
    // && res.redirect("/")
})

// *********** UPDATING A MEMBER ***********

//to update something, you use a PUT request

router.put("/:id", (req, res) => {
  
  const found = members.some(member => member.id === parseInt(req.params.id))
  
  if (found) {
    const updMember = req.body
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
          member.name = updMember.name ? updMember.name : member.name
          member.email = updMember.email ? updMember.email : member.email
          
          res.json({msg: "Member updated", member})
      }
    })
  } else {
    res.status(400).json({msg: `No member with the ID of ${req.params.id}`})  
  }
})


router.get("/", (req, res) => res.json(members))

//we don't need to do JSON.stringify() even though these are JS objects, because express takes care of that

// ********** DELETE MEMBER **********
  
  router.delete("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id)) // if it doesn't exist, it will equal false, if it exists, it will equal true
     
  found
  ? res.json({
      msg: "Member deleted.",
      members: members.filter(member => member.id !== parseInt(req.params.id))
    })
  : res.status(400).json({msg: `No member with the ID of ${req.params.id}`})

})



module.exports = router