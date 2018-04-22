/**
 * TripController
 *
 * @description :: Server-side logic for managing trips
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function () {

        async.parallel({

            route: function (parallelCb) {
                Route.find().sort('name ASC').exec(function (err, data) {
                    parallelCb(null, { err: err, data: data });
                });
            },
            cartype: function (parallelCb) {
                CarType.find().sort('name ASC').exec(function (err, data) {
                    parallelCb(null, { err: err, data: data });
                });
            },
            driver: function (parallelCb) {
                Driver.find().sort('firstname ASC').exec(function (err, data) {
                    parallelCb(null, { err: err, data: data });
                });
            }
        }, function (err, results) {

            let responses = {
                route: results.route.data,
                cartype: results.cartype.data,
                driver: results.cartype.data
            }

            //console.log(responses)
            if (err)
                return res.badRequest("Error");
            else
                return res.view("add-trip", responses)

        })
    }
};

