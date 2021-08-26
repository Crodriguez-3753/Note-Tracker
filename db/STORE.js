const noteJSON = require("./db.json");
const {writeFileSync} = require("fs");
const path = require("path")
// Store notes

class Store{

    read() {
        return noteJSON;
    };
    addNote(note){
    const length = noteJSON.push(note);
    writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(noteJSON));
    return length -1;
    };
}

module.exports = new Store();