const router = require('express').Router();
const path = require('path') // ????

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
    // console.info(`${req.method} request received`);
    // res.json(notes)
});

router.get('/', (req,res) => {   //show homepage
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = router;