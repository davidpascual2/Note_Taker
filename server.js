const express = require('express');
const path = require('path')
const fs = require('fs');
const { get } = require('http');
// const uuid = require('uuid')

const apiRouter = require('./routes/apiRouter');
const htmlRouter = require('./routes/htmlRouter');

const app = express();

//set port
const PORT = process.env.PORT || 3001; 

//middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use("/", htmlRouter);
app.use('/api', apiRouter);



//request
// app.get('/', (req,res) => {   //show homepage
//     res.sendFile(path.join(__dirname, './public/index.html'))
// });

// app.get('/notes', (req, res) => {
//     console.info(`${req.method} request received`);
//     res.json(notes)
//     // res.sendFile(path.join(__dirname, './public/notes.html'))
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'))
// });

// app.get('/api/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './db/db.json'))
    
// });

// app.post('/api/notes', (req, res) => {
//  console.info
// });

app.listen(PORT,() => 
console.log(`App listening at http://localhost:${PORT}`)
);
