const router = require('express').Router(); // ????
const fs = require('fs');
const notes = require('../db/db.json');
const path = require('path');
const { randomUUID } = require('crypto');

router.get('/notes', (req, res) => {
    console.info(`${req.method} request received`);
    res.json(notes)
    // res.sendFile(path.join(__dirname, './public/notes.html'))
});

router.post('/notes', (req, res) => {
    console.info(`${req.method} request received`)
    
    const {title, text} = req.body //destructuring assignment for the items in req.body
    
    if ( title && text ) {  //if all the required properties are present
    const newNote = {  //var for object that will be saved
        id: randomUUID(), // ???????
        title,
        text,
        };

    // readAndAppend(newNote, )

    const response = {
        status: 'success',
        body: newNote,
    };
    
    console.log(response);
    res.status(201).json(response);
    db.push(newNote);
    fs.writeFile('/db/db.json', JSON.stringify(db), (err) => {
        if (err) { console.log(err);}
     else { console.log('Success!')}
    });
} else {
    res.status(500).json('Error in creating new note');
}
});

// router.post('/api/notes', (req, res) => {
//     console.info(`${req.method} request received`);
//     const { title, text } = req.body;

//     if (title && text) {
//         const newNote = {
//             id: randomUUID(),
//             title,
//             text,
//         };

//         const response = {
//             status: 'success',
//             body: newNote,
//         };

//         console.log(response);
//         res.status(201).json(response);
//         db.push(newNote);
//         fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
//             if (err) { console.log(err); }
//             else { console.log("File written successfully\n"); }
//         });
//     } else {
//         res.status(500).json('Error in creating new note');
//     }
// })


module.exports = router