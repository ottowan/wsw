/**
 * TripController
 *
 * @description :: Server-side logic for managing trips
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {

        //var partner = 1
        var criteria = {partner : 1}
        async.parallel({

            routeinfo: function (parallelCb) {
                RouteInfo.find(criteria).sort('name ASC').exec(function (err, data) {
                    parallelCb(null, { err: err, data: data });
                });
            },
            cartype: function (parallelCb) {
                CarType.find().sort('name DESC').exec(function (err, data) {
                    parallelCb(null, { err: err, data: data });
                });
            },
            driver: function (parallelCb) {
                Driver.find(criteria).sort('firstname ASC').exec(function (err, data) {
                    parallelCb(null, { err: err, data: data });
                });
            }
        }, function (err, results) {

            let responses = {
                routeinfoes: results.routeinfo.data,
                cartypes: results.cartype.data,
                drivers: results.driver.data
            }

            //console.log(responses)
            if (err)
                return res.badRequest("Error");
            else
                return res.view("add-trip", responses)

        })
    }
};

