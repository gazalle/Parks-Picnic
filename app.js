const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate the app
const app = express();

//Express middleware
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // For parsing application/json
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'picnic_parks', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
  app.use(errorHandler());
}

//Configure Mongoose
mongoose.connect('mongodb://localhost:27017/parks', {
    useNewUrlParser: true
});
mongoose.set('debug', true);

//Models anc configs
require('./models/Users');
require('./models/Parks');
require('./config/passport');

// Import APIs (routes)
const parksRouter = require('./routes/api/parks');
const usersRouter = require('./routes/api/users')

// Set up express routes
//app.use(require('./routes'));
app.use('/api/parks', parksRouter);
app.use('/api/users', usersRouter);

//Error handlers & middlewares
if(!isProduction) {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
  
      res.json({
        errors: {
          message: err.message,
          error: err,
        },
      });
    });
  }

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
  
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });

  app.listen(8000, () => console.log('Server running on http://localhost:8000/'));
  