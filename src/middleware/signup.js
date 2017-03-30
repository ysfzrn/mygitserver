'use strict';

module.exports = function(app) {
  return function(req, res, next) {
  	const body = req.body;

    app.service('users').create({
    	 email:body.email,
    	 password:body.password,
    	 name:body.name,
    	 surname:body.surname,
    	 image:body.image
    })
    .then(user=>res.send({ "data":"OK" }))
    .catch(next);
  };
};
