/**
 * RouteController
 *
 * @description :: Server-side logic for managing routes
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
    
        //console.log("Called this")
        Driver.create({
          partner: req.param('partner'),
          firstname: req.param('firstname'),
          lastName: req.param('lastName'),
          personal_id: req.param('personal_id'),
          car_license_id: req.param('car_license_id'),
          address: req.param('address'),
          tambon: req.param('tambon'),
          district: req.param('district'),
          province: req.param('province'),
          postcode: req.param('postcode'),
          email: req.param('email'),
          mobile: req.param('mobile'),
        }).exec(function (err, data) {
    
    
          console.log(err)
    
          if (err)
            return res.badRequest("Error");
          else
            return res.redirect('/list-driver');
          // PartnerCar.find().sort('createdAt ASC').exec(function (err, data) {
          //   return res.view("list-car", data)
          // });
        })
      },
    
      find: function (req, res) {
        join = ['province', 'partnercar']
        Driver.find().populate(join).sort('createdAt ASC').exec(function (err, data) {
    
          console.log(err)
          responses = { drivers : data}
          return res.view("list-driver", responses)
        });
      },
      
    findByStartAndEnd: function (req, res) {
        //var criteria = { part_id: req.param('part') }
        //console.dir(criteria)
        var start_lat = req.param('start_lat')
        var start_long = req.param('start_long')
        var end_lat = req.param('end_lat')
        var end_long = req.param('end_long')

        /* Query : find near location
        SELECT 
        id, 
        (
           6371 *
           acos(cos(radians(37)) * 
           cos(radians(lat)) * 
           cos(radians(lng) - 
           radians(-122)) + 
           sin(radians(37)) * 
           sin(radians(lat )))
        ) AS distance_start ,

        FROM markers 
        HAVING distance < 25 
        ORDER BY distance LIMIT 0, 20;
        */


        var sql = "SELECT "
        sql += "route.id as id, "
        sql += "partner, "
        sql += "partner.name as partner_name, "
        sql += "route.name as route_name, "
        sql += "start_name, "
        sql += "end_name, "
        sql += "( "
        sql += "    6371 * "
        sql += "   acos(cos(radians("+start_lat+")) *  "
        sql += "   cos(radians(start_lat)) *  "
        sql += "   cos(radians(start_long) -  "
        sql += "    radians("+start_long+")) +  "
        sql += "   sin(radians("+start_lat+")) *  "
        sql += "   sin(radians(start_lat))) "
        sql += " ) AS distance_start , "
        sql += "( "
        sql += "    6371 * "
        sql += "   acos(cos(radians("+end_lat+")) *  "
        sql += "   cos(radians(end_lat)) *  "
        sql += "   cos(radians(end_long) -  "
        sql += "   radians("+end_long+")) +  "
        sql += "   sin(radians("+end_lat+")) *  "
        sql += "   sin(radians(end_lat))) "
        sql += ") AS distance_end  "
        sql += "FROM route, partner "
        sql += "WHERE partner = partner.id "
        sql += "HAVING distance_start < 20 AND distance_end < 20 "


        //console.log(sql)
        //var sql = "SELECT * FROM poll WHERE poll.department = ? AND poll.part_id ?"
        //var criteria = [req.param('department'), req.param('part')]
        Route.query(sql, function (err, data) {
            if (err) {
                return res.serverError(err);
            }
            //console.dir(data);
            return res.send(data)
        })
    },
};

