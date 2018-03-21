/**
 * PartnerCarController
 *
 * @description :: Server-side logic for managing Partnercars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var async = require('async');
module.exports = {

  index: function (req, res) {

    async.parallel({
      cartypes: function (parallelCb) {
        CarType.find().exec(function (err, data) {
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
        cartypes: results.cartypes.data,
        provinces: results.provinces.data,
      }

      //console.log(responses)
      if (err)
        return res.badRequest("Error");
      else
        return res.view("add-car", responses)

    })
  },


  create: function (req, res) {
    PartnerCar.create({
      cartype: req.param('cartype'),
      partner: req.param('partner'),
      province: req.param('province'),
      plate_no: req.param('plate_no'),
      name: req.param('name'),
    }).exec(function (err, data) {


      console.log(data)

      if (err)
        return res.badRequest("Error");
      else
        return res.redirect('/list-car');
      // PartnerCar.find().sort('createdAt ASC').exec(function (err, data) {
      //   return res.view("list-car", data)
      // });
    })
  },

  find: function (req, res) {
    join = ['province', 'cartype']
    PartnerCar.find().populate(join).sort('createdAt ASC').exec(function (err, data) {

      //console.log(data)
      responses = { partnercars : data}
      return res.view("list-car", responses)
    });
  },
};

