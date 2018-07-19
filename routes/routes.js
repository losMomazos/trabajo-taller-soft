module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.render('inicio');
  });
  app.get('/login', (req, res) => {
    res.render('login',{
        message: req.flash('loginMessage')
    });
  });

   app.post('/login', passport.authenticate('local-login', {
    successRedirect: 'http://localhost:4200/',
    failureRedirect: '/login',
    failureFlash: true // allow flash messages
  }));

  app.get('/signup', (req, res) =>{
    res.render('signup',{
        message: req.flash('signupMessage')
    });
  });
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: 'http://localhost:4200/',
    failureRedirect: '/signup',
    failureFlash: true // allow flash messages
  }));

  app.get('/profile',isLoggedIn, (req, res) => {
    res.render('profile', {
        user: req.user
    });
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
/* Para el admin se debe hacer una cuenta especial y si se logea bien
   entonces puede ver y editar los usuarios :
   
   app.get('/profile', (req, res) => {
    req.logout();
    res.redirect('/');
  });

*/
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}