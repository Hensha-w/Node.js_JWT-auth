const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

//middleware
app.use(express.static('public'));

//view engine
app.set('view engine', 'ejs');

//dtb connection
const dbURI = 'mongodb+srv://nodeproject:Chixxing123@nodeproject.cegx2bv.mongodb.net/jobs?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

    //routes
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/jobs', (req, res) => {
  res.render('jobs');
});
app.use(authRoutes);