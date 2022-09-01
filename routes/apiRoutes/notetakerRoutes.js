const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const { filterByQuery, findById, newReminder, verifyNote } = require('../../lib/notetaker');
const notesArr = require('../../db/db.json');


router.get('/notes', (req, res) => {
    let result = notesArr;
    if (req.query) {
        result = filterByQuery(req.query, result)
    }
    res.json(result);
    
});


router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notesArr);
    
    (result) ? res.json(result) : res.status(404).send('invalid note ID');
});
router.post('/notes', (req, res) => {

    console.log(req.body);

    req.body.id = uuidv4();
   
    (!verifyNote(req.body)) ? res.status(400).send('invalid note format') : res.json(newReminder(req.body, notesArr));
});

router.delete('/notes/:id', (req, res) => {
   
    const note = findById(req.params.id, notesArr);

    note ? res.json(note) : res.status(404).send('invalid note ID');

    const index = notesArr.indexOf(note);
    notesArr.splice(index, 1);
   
});


module.exports = router;