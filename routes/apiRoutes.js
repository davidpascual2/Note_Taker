const router = require('express').Router(); // ????
const fs = require('fs');
const notes = require('../db/db.json');
const path = require('path');

router.get('/notes', (req, res) => {
    console.info(`${req.method} request received`);
    res.json(notes)
    // res.sendFile(path.join(__dirname, './public/notes.html'))
});

router.post('/notes', (req, res) => {
    console.info(`${req.method} request received`)
    // res.body.id
});


module.exports = router