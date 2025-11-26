const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

//view engine
app.set('view engine', 'ejs');

//dtb connection
const dbURI = 'mongodb+srv://nodeproject:Chixxing123@nodeproject.cegx2bv.mongodb.net/jobs?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//routes
app.use(checkUser);
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/job', requireAuth, (req, res) => {
  res.render('job');
});

app.use(authRoutes);