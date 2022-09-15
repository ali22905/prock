const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const helmet = require("helmet");
const { request } = require('http');
// to change the defult path of the views directory
app.set('views', path.join(__dirname, '/views'));
// to act like you are in the views directory
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(helmet()); 

 



app.get('/', (req, res) => {
  res.redirect('/home')
})


app.get('/home', (req, res) => {
  res.render('index')
})

app.post('/home', (req, res) => {
  res.redirect('/home')
})


app.get('/sign-in', (req, res) => {
  res.render('sign-in')
})



app.get('/login', (req, res) => {
  res.render('login')
})




// if the page entered is not found 
app.use((req, res) => {
    res.status(404).send("<h1>sorry! page not found</h1>")
  })




app.listen( process.env.PORT  ||   port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})