const mongoose = require('mongoose');
const User = mongoose.model('User');

const usersCreate = (req, res) => {
    User.create({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(user);
        }
    });
}

const usersReadOne = (req, res) => {
    User
        .findById(req.params.userid)
        .select(email)
        .exec((err, user) => {
            if (!user) {
                return res
                    .status(404)
                    .json({
                        "message": "userid not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(user);
        });
}

module.exports = {
    usersCreate,
    usersReadOne
};
