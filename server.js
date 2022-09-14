const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const helmet = require("helmet");
// to change the defult path of the views directory
app.set('views', path.join(__dirname, './views'));
// to act like you are in the views directory
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(helmet()); 

 




app.get('/', (req, res) => {
  res.render('index')
})





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})