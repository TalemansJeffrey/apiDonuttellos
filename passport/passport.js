const passport = require('passport');
const User = require('../models/User');

//verander authenticate naar createStrategy
//passpoort wordt huer geconfigureerd
passport.use(User.createStrategy());

//serialize user data voor sessie
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;