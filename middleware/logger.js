const moment = require("moment")
// moment is sth I installed to get date and time

const logger = (req, res, next) => {
    //console.log("Hello")
    console.log(
      `${req.protocol}://${req.get("host")}${req.originalUrl}: ${moment().format()}` //this returns date and time
      ) //returns http://localhost:5000/api/members
    next()
    //you always want to call 'next' last so that you can move to the next middleware function that is in the stack
  }


  module.exports = logger