// const express = require('express');
// const session = require('express-session')
// const passport = require('passport');

// require('../auth');

// function isLoggedIn(req, res, next){
//     req.user ? next() : res.sendStatus(401);
// }

// const app = express();

// //Session needs to be before app is initialized
// app.use(session({ secret: 'cats'}));
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/', (req, res) => {
//     res.send('<a href="/auth/google">Authenticate with Google</a>')
// });

// app.get('/auth/google',
//     passport.authenticate('google', {scope: ['email', 'profile']})
// )

// app.get('/auth/google/callback',
//     passport.authenticate('google',{
//         successRedirect: '/protected',
//         failureRedirect: '/auth/failure'
//     })
// )

// app.get('/auth/failure', (req, res) => {
//     res.send('Log in not successed')
// })

// app.get('/protected', isLoggedIn, (req, res) => {
//     res.send(`Hello ${req.user.displayName}`);
// })

// app.get('/logout', (req, res) => {
//     req.logout();
//     req.session.destroy(); //destroy chrome session
//     res.send('GoodBye!');
// })


// module.exports = router;
