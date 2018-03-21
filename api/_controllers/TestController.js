/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (request, response) {
        return response.view('test', {
          currentDate: (new Date()).toString()
        });
      }	
};

