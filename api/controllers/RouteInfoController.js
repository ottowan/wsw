/**
 * RouteNameController
 *
 * @description :: Server-side logic for managing Routenames
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {
        return res.view("add-route")
    },

    create: function (req, res) {


        if (req.param('startpostcode').length > 0)
            var startpostcode = req.param('startpostcode')
        else
            var startpostcode = 0

        if (req.param('postcode1').length > 0)
            var postcode1 = req.param('postcode1')
        else
            var postcode1 = 0

        if (req.param('postcode2').length > 0)
            var postcode2 = req.param('postcode2')
        else
            var postcode2 = 0

        if (req.param('postcode3').length > 0)
            var postcode3 = req.param('postcode3')
        else
            var postcode3 = 0

        if (req.param('postcode4').length > 0)
            var postcode4 = req.param('postcode4')
        else
            var postcode4 = 0

        if (req.param('postcode5').length > 0)
            var postcode5 = req.param('postcode5')
        else
            var postcode5 = 0

        if (req.param('postcode6').length > 0)
            var postcode6 = req.param('postcode6')
        else
            var postcode6 = 0

        if (req.param('endpostcode').length > 0)
            var endpostcode = req.param('endpostcode')
        else
            var endpostcode = 0

        RouteInfo.create({
            partner: 1,
            name: req.param('name'),
            startpoint: req.param('startpoint'),
            stoppoint1: req.param('stoppoint1'),
            stoppoint2: req.param('stoppoint2'),
            stoppoint3: req.param('stoppoint3'),
            stoppoint4: req.param('stoppoint4'),
            stoppoint5: req.param('stoppoint5'),
            stoppoint6: req.param('stoppoint6'),
            endpoint: req.param('endpoint'),
            startpostcode: startpostcode,
            postcode1: postcode1,
            postcode2: postcode2,
            postcode3: postcode3,
            postcode4: postcode4,
            postcode5: postcode5,
            postcode6: postcode6,
            endpostcode: endpostcode

        }).exec(function (err, data) {


            console.log(err)

            if (err)
                return res.badRequest("Error");
            else
                return res.redirect('/list-routeinfo');
        })


    },

    find: function (req, res) {
        RouteInfo.find().sort('createdAt ASC').exec(function (err, data) {

            //console.log(data)
            responses = { routeinfo: data }
            return res.view("list-routeinfo", responses)
        });
    },

    findByID: function (req, res) {
        var criteria = { id: req.param('id') }
        RouteInfo.find(criteria).exec(function (err, data) {
            return res.json(data)
        });
    },
};

