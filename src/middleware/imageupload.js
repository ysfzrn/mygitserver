"use strict";

module.exports = function(app) {
  return function(req, res, next) {
    const body = req.body;
    const _id = body._id;
    const image = body.image;

    app
      .service("users")
      .patch(_id, { image: image })
      .then(user => res.send({ data: user }))
      .catch(next);
  };
};
