/**
 * PartnerController
 *
 * @description :: Server-side logic for managing partners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');
module.exports = {
    index: function (req, res) {
        res.view("partner-signup");
    },
    create : function (req, res) {
        //console.log(req)

        // console.log("Call signup() : "+req.param('password'))
        // // Encrypt a string using the BCrypt algorithm.
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
                Partner.create({
                    license_id: req.param('license_id'),
                    vat_id: req.param('vat_id'),
                    company_name: req.param('company_name'),
                    fisrtname: req.param('fisrtname'),
                    lastname: req.param('lastname'),
                    address: req.param('address'),
                    tambon: req.param('tambon'),
                    district: req.param('district'),
                    province: req.param('province'),
                    postcode: req.param('postcode'),
                    email: req.param('email'),
                    telephone: req.param('telephone'),
                    email: req.param('email'),
                    mobile: req.param('mobile'),
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

                    req.session.partner = newUser.id; 
                    req.session.email = newUser.email; 
                    req.session.username = newUser.username; 
                    req.session.fisrtname = newUser.fisrtname; 
                    req.session.lastname = newUser.lastname; 
                    return res.redirect('/dashboard');

                });//</User.create>
            }
        });//</Passwords.encryptPassword>
    }//</UserController.signup>
};



