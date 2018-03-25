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

        Route.create({
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

    find: function (req, res) {
        //join = ['province', 'partnercar'] .populate(join)
        var param = {start_name : res.param("start"), end_name:res.param("end")}

        console.log(res.param("start"))

        Route.find().sort('createdAt ASC').exec(function (err, data) {
    
          console.log(err)
          responses = { drivers : data}
          return res.view("list-driver", responses)
        });
      },
};

