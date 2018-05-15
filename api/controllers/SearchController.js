/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {

        var searchBy = req.param('by')
        if (searchBy == "route") {
            this.byRoute(req, res)
        } else if (searchBy == "partner") {
            this.byPartner(req, res)
        }

    },

    byRoute: function (req, res) {
        let responses = {
            by: req.param('by'),
            cartype: req.param('cartype'),
            startpoint: req.param('startpoint'),
            endpoint: req.param('endpoint')
        }
        //console.log(responses)
        return res.view("search_route", responses)
    },

    byPartner: function (req, res) {

        // let responses = {
        //     by: req.param('by'),
        //     cartype: req.param('cartype'),
        //     startpoint: req.param('startpoint'),
        //     endpoint: req.param('endpoint')
        // }
        // console.log(responses)

        RouteInfo.find()
            .where({
                or: [ 
                    { startpostcode: req.param('startpoint') },
                    { postcode1: req.param('startpoint') }, 
                    { postcode2: req.param('startpoint') }, 
                    { postcode3: req.param('startpoint') }, 
                    { postcode4: req.param('startpoint') }, 
                    { postcode5: req.param('startpoint') }, 
                    { postcode6: req.param('startpoint') }
                    
                ]
            })
            .where({
                or: [
                    { postcode1: req.param('endpoint') }, 
                    { postcode2: req.param('endpoint') }, 
                    { postcode3: req.param('endpoint') }, 
                    { postcode4: req.param('endpoint') }, 
                    { postcode5: req.param('endpoint') }, 
                    { postcode6: req.param('endpoint') }, 
                    { endpostcode: req.param('endpoint') } 
                ]
            })
            .populate('partner', { select: ['id', 'company_name']})
            .exec(function (err, data) {

                console.log(data)
                return res.json(data)
            });

        // console.log(responses)
        // return res.json(responses)
    },
};

