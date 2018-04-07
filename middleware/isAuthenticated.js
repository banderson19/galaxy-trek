module.exports = function(req, res, next) {
    if (req.isAuthenticated()) {
      console.log('authentication passed') 
      return next();
    } else {
      return res.status(404).send("you can't sit with us");
    }
  };