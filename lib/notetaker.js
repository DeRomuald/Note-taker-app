const fs = require('fs');
const path = require('path');
const notesArr = require ('../db/db.json')

const filterByQuery=(query, arr)=> {
  let filteredResults = arr;

  if (query.title) return filteredResults = filteredResults.filter(note => note.title === query.title);

    if (query.text) return filteredResults = filteredResults.filter(note => note.text === query.text);
    return filteredResults;
}

const findById = (id, arr) => {
    return arr.filter(note => note.id === id)[0];
}

const newReminder = (body, array) => {
    const reminder = body;
    array.push(reminder);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArr, null, 2)); 
    
    return reminder;
}

const verifyNote = note => {
    
    if (!note.title || typeof note.title !== 'string') return false; 
    if (!note.text || typeof note.text !== 'string') return false;
    return true;
}






module.exports = {
    filterByQuery,
    findById,
    newReminder,
    verifyNote
}