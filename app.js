const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const path = require("path")
const mongoose = require("mongoose")
require("./models/Question")
const QuestionSchema = mongoose.model("questions")

const door = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set("view engine", "handlebars")

app.use(express.static(path.join(__dirname, "public")))

// Mongodb
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/refutando")
    .then(() => {
        console.log("Mongodb connected!")
    })
    .catch(error => {
        console.log("An error has occurred: " + error)
    })
    
// Routes
app.get("/", (req, res, next) => {
    QuestionSchema.find().sort({
        date: "desc"
    })
        .then(questions => {
            res.render("index", {questions: questions})
        })
        .catch(error => {
            console.log("An error has occurred: " + error)
        })
})

app.get("/makepost", (req, res, next) => {
    res.render("formPost")
})

app.post("/makepost/new", (req, res, next) => {
    const newQuestion = {
        title: req.body.title,
        content: req.body.content,
    }

    new QuestionSchema(newQuestion).save()
        .then(() => {
            console.log("Added question")
            res.redirect("/")
        })
        .catch(error => {
            console.log("An error has occurred: " + error)
        })
})

app.get("/commentPage", (req, res, next) => {
    res.render("commentPage")
})

app.listen(door, () => {
    console.log("Running...")
})
