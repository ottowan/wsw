/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Passwords = require('machinepack-passwords');
module.exports = {
    register: function (req, res) {
        // Encrypt a string using the BCrypt algorithm.
        Passwords.encryptPassword({
            password: req.param('password'),
        }).exec({
            // An unexpected error occurred encrypting the password.
            error: function (err) {
                return res.serverError(err);
            },
            // OK.
            success: function (encryptedPassword) {

                // Create a user record in the database.
                User.create({
                    username: req.param('username'),
                    email: req.param('email'),
                    password: encryptedPassword
                }).exec(function (err, newUser) {
                    // If there was an error, we negotiate it.
                    if (err) {

                        // If this is NOT a waterline validation error, it is a mysterious error indeed.
                        var isWLValidationErr = _.isObject(err) && _.isObject(err.invalidAttributes);
                        if (!isWLValidationErr) {
                            return res.serverError(err);
                        }

                        // Otherwise, it must be a waterline validation error.

                        // If it doesn't contain a problem with the password, then just handle is
                        // using `res.badRequest()` like normal.
                        if (!_.isArray(err.invalidAttributes.password)) {
                            return res.badRequest(err);
                        }

                        // Otherwise, something was wrong with the provided encrypted password.
                        // So in this case, we'll modify the validation error in place to improve the error output
                        // and so that we don't inadvertently reveal info about the encrypted password.
                        // (specifically, we loop over the array of attribute errors and modify them).
                        err.invalidAttributes.password = _.map(err.invalidAttributes.password, function eachPasswordErr(passwordError) {
                            return _.reduce(passwordError, function (memo, val, key) {
                                var allOccurrencesOfEncryptedPassMatcher = new RegExp(_.escapeRegExp(encryptedPassword), 'g');
                                memo[key] = val.replace(allOccurrencesOfEncryptedPassMatcher, '****');
                                return memo;
                            }, {});
                        });

                        // Finally, respond with the modified waterline validation error and a 400 status code.
                        return res.badRequest(err);

                    }//</if (err)>

                    // Otherwise, `err` was falsy, so it worked!  The user was created.
                    // (maybe do other stuff here, or just send a 200 OK response)

                    req.session.userId = newUser.id; 
                    req.session.email = newUser.email; 
                    return res.redirect('/profile');

                });//</User.create>
            }
        });//</Passwords.encryptPassword>
    }//</UserController.signup>
};

