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
            startpostcode: req.param('startpostcode'),
            postcode1: req.param('postcode1'),
            postcode2: req.param('postcode2'),
            postcode3: req.param('postcode3'),
            postcode4: req.param('postcode4'),
            postcode5: req.param('postcode5'),
            postcode6: req.param('postcode6'),
            endpostcode: req.param('endpostcode')
            
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

