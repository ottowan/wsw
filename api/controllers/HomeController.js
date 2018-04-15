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

      app.use(express.static(path.join(__dirname, 'html')));
      var html_dir = './SCSS/';
      app.get('/', function (req, res) {
          res.sendfile(html_dir + 'index.html');
      });
  }
};

