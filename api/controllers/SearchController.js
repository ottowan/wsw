/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {
        let responses = {
            by: req.param('by'),
            startpoint: req.param('startpoint'),
            endpoint: req.param('endpoint')
        }


        console.log(responses)
        return res.view("search_route", responses)
    },
};

