const express = require("express")

const app = express()



// route INDEX

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})
























app.listen(3000, () => {console.log("listening on port 3000")})