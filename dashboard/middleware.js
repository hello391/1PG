const AuthClient = require('./auth-client'),
      utils = require('./utils');

module.exports.setUser = async function setUser (req, res, next) {
  res.locals.utils = utils; 

  const key = req.cookies.get('key');
  if (key)
    res.locals.user = await AuthClient.getUser(key);

  return next();
}

module.exports.validateUser = function validateUser(req, res, next) {
  const key = req.cookies.get('key');
  if (!key)
    return res.render('errors/401');
  
  return next();
}