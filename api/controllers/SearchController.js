/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {

        var searchBy = req.param('by')
        if (searchBy == "route"){
            this.byRoute(req, res)
        }else if(searchBy == "partner"){

        }

    },

    byRoute: function (req, res) {
        let responses = {
            by: req.param('by'),
            cartype: req.param('cartype'),
            startpoint: req.param('startpoint'),
            endpoint: req.param('endpoint')
        }
        console.log(responses)
        return res.view("search_route", responses)
    },

    byPartner: function (req, res) {
        let responses = {
            by: req.param('by'),
            cartype: req.param('cartype'),
            startpoint: req.param('startpoint'),
            endpoint: req.param('endpoint')
        }
        console.log(responses)
        return res.json(responses)
    },    
};

