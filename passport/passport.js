const passport = require('passport');
const User = require('../models/User');

//verander authenticate naar createStrategy
//passpoort wordt huer geconfigureerd
passport.use(User.createStrategy());

//serialize user data voor sessie
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//webtoken strategy
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //key uit header halen
opts.secretOrKey = 'DonutelloSecret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.uid}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));



module.exports = passport;