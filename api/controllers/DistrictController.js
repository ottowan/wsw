/**
 * DistrictController
 *
 * @description :: Server-side logic for managing districts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findByProvince : function (req, res){
        var criteria = {province : req.param("pid")}


        //var result = await  District.find(criteria).sort('createdAt ASC')

        //return res.json(result)

        District.find(criteria).sort('createdAt ASC').exec(function (err, data) {
    
          console.log(err)
          responses = { districts : data}
          
        return res.json(responses)
        });
    }
};

