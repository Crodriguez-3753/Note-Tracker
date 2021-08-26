const noteJSON = require("./db.json")
// Store notes

class Store{

    read() {
        return noteJSON;
    };
    addNote(note){
    const length = noteJSON.push(note)
    return length -1;
    };
}

module.exports = new Store();