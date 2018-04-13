/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `HomeController.index()`
   */
  index: function (req, res) {

    CarType.find().exec(function(err, data) {

      //console.log(data)
      if (err) 
        return res.badRequest("Error");
      else
          return res.view("../SCSS/index.html", { cartypes: data })
    });
    
  }
};

