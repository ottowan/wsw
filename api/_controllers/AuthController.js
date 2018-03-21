/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    processLogin: function (req, res) {
        req.session.user_id = 1;
        req.session.email = req.param('email');
        req.session.password = req.param('password');
        return res.redirect('/profile');
    },

};

