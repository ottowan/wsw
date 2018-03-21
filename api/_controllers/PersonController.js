/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
/*

        CREATE TABLE `person` (
            `id` INT(11) NOT NULL AUTO_INCREMENT,
            `user` INT(11) NULL DEFAULT '0',
            `pid` INT(11) NULL DEFAULT '0',
            `titlename` VARCHAR(50) NULL DEFAULT '0',
            `firstname` VARCHAR(255) NULL DEFAULT '0',
            `lastname` VARCHAR(255) NULL DEFAULT '0',
            `mobile` VARCHAR(255) NULL DEFAULT '0',
            `telephone` VARCHAR(255) NULL DEFAULT '0',
            `birthdate` VARCHAR(50) NULL DEFAULT '0',
            `house_no` VARCHAR(50) NULL DEFAULT '0',
            `moo_no` INT(11) NULL DEFAULT '0',
            `village` VARCHAR(50) NULL DEFAULT '0',
            `road` VARCHAR(50) NULL DEFAULT '0',
            `alley` VARCHAR(50) NULL DEFAULT '0',
            `subdistrict` VARCHAR(50) NULL DEFAULT '0',
            `district` VARCHAR(50) NULL DEFAULT '0',
            `province` VARCHAR(50) NULL DEFAULT '0',
            `postcode` INT(11) NULL DEFAULT '0',
            `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            INDEX `Index 1` (`id`)
        )

        let params = {
            user: req.param('user'),
            pid: req.param('pid'),
            titlename: req.param('titlename'),
            titlename: req.param('firstname'),
            titlename: req.param('lastname'),
            titlename: req.param('mobile'),
            titlename: req.param('telephone'),
            titlename: req.param('birthdate'),
            titlename: req.param('house_no'),
            titlename: req.param('moo_no'),
            titlename: req.param('village'),
            titlename: req.param('road'),
            titlename: req.param('alley'),
            titlename: req.param('subdistrict'),
            titlename: req.param('district'),
            titlename: req.param('province'),
            titlename: req.param('postcode')
        }

        User.create(params).exec(function (err, finn) {
            if (err) { return res.serverError(err); }

        });*/
    }
};

