const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000 // when we deploy, the server will likely have the port in an environment variable, so we will want to check that first and if that is not available, then we will want to run on PORT 5000

app.listen()