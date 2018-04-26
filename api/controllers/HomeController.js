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

      var express = require('express');
      var app = express();
      var path = require('path');
      app.get('/', function (req, res) {

        console.log(__dirname + '/SCSS/index.html')
          res.sendfile(path.join(__dirname + '/SCSS/index.html'));
      });
  }
};

