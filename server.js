const express = require("express")

const app = express()

const drinks = require("./models/drinks")

// route INDEX

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})


// route Drinks JSON

app.get("/drinks", (req, res) => {
    res.send(drinks)
})





















app.listen(3000, () => {console.log("listening on port 3000")})