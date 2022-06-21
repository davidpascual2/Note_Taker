const router = require('express').router();
const path = require('path') // ????


router.get('/', (req,res) => {   //show homepage
    res.sendFile(path.join(__dirname, './public/index.html'))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
    // console.info(`${req.method} request received`);
    // res.json(notes)
});

module.exports = router;