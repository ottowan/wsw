/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {
        let responses = {
            start_route: req.param('start_route'),
            end_route: req.param('end_route')
        }


        console.log(responses)
        return res.view("search", responses)
    },
};

