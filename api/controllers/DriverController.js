/**
 * DriverController
 *
 * @description :: Server-side logic for managing Partnercars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var async = require('async');
module.exports = {

  index: function (req, res) {

    async.parallel({

      partnercars: function (parallelCb) {
        Province.find().sort('name ASC').exec(function (err, data) {
          parallelCb(null, { err: err, data: data });
        });
      },
      provinces: function (parallelCb) {
        Province.find().sort('name ASC').exec(function (err, data) {
          parallelCb(null, { err: err, data: data });
        });
      },
    }, function (err, results) {

      let responses = {
        provinces: results.provinces.data,
        partnercars : results.partnercars.data
      }

      //console.log(responses)
      if (err)
        return res.badRequest("Error");
      else
        return res.view("add-driver", responses)

    })
  },


  create: function (req, res) {

    console.log("Called this")
    Driver.create({
      partner: req.param('partner'),
      firstname: req.param('firstname'),
      lastName: req.param('lastName'),
      personal_id: req.param('personal_id'),
      car_license_id: req.param('car_license_id'),
      address: req.param('address'),
      tambon: req.param('tambon'),
      district: req.param('district'),
      province: req.param('province'),
      postcode: req.param('postcode'),
      email: req.param('email'),
      mobile: req.param('mobile'),
    }).exec(function (err, data) {


      console.log(err)

      if (err)
        return res.badRequest("Error");
      else
        return res.redirect('/list-driver');
      // PartnerCar.find().sort('createdAt ASC').exec(function (err, data) {
      //   return res.view("list-car", data)
      // });
    })
  },

  find: function (req, res) {
    join = ['province', 'partnercar']
    Driver.find().populate(join).sort('createdAt ASC').exec(function (err, data) {

      console.log(err)
      responses = { drivers : data}
      return res.view("list-driver", responses)
    });
  },
};

