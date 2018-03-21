/**
 * RouteNameController
 *
 * @description :: Server-side logic for managing Routenames
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {

        // async.parallel({

        //   partnercars: function (parallelCb) {
        //     Province.find().sort('name ASC').exec(function (err, data) {
        //       parallelCb(null, { err: err, data: data });
        //     });
        //   },
        //   provinces: function (parallelCb) {
        //     Province.find().sort('name ASC').exec(function (err, data) {
        //       parallelCb(null, { err: err, data: data });
        //     });
        //   },
        // }, function (err, results) {

        //   let responses = {
        //     provinces: results.provinces.data,
        //     partnercars : results.partnercars.data
        //   }

        //console.log(responses)
        //   if (err)
        //     return res.badRequest("Error");
        //   else
        //     return res.view("add-route", responses)

        // })

        return res.view("add-route")
    },

    create: function (req, res) {

        RoutedName.create({
            name: req.param('name'),
            start_name: req.param('start_name'),
            end_name: req.param('end_name')
            
        }).exec(function (err, data) {


            console.log(err)

            if (err)
                return res.badRequest("Error");
            else
                return res.send( { message: "Sugoi!!!" })
        })
    },
};

