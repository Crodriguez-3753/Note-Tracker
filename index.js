const express = require("express");
const notesJSON = require("./db/db.json");

//const notesArray = JSON.parse (notesJSON);
console.log(notesJSON);
const app = express();
const PORT = 3000;


// server static 
app.use(express.static("public"));

//json middleware
//url encoded middleware

//API Routes// (save/rewrite and load)
app.get("/api/notes", (req, res) => {
    console.log("/api/notes");
    res.json(notesJSON)
});
// get API notes
//post API notes

//start listening
app.listen(PORT, ()=> console.log("server running on http://localhost:3000"));