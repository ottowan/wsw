/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {view: 'login'}, 
  // 'get /login': { view: 'login' },
  // 'post /login': 'AuthController.processLogin',

  // '/logout': 'AuthController.logout',
  // 'get /me': 'UserController.profile',

  // 'get /register': { view: 'register' },
  // 'post /register': 'UserController.register',

  // 'get /profile': { view: 'profile' },
  // 'post /profile':  'PersonController.create',

  // '/test': 'TestController.index',



  // 'get /category': { view: 'category' },
  // 'get /forum': { view: 'forum' },
  // 'get /post': { view: 'post' },

  '/': {
    controller: 'home',
    action: '/scss/index.html'
  },

  '/dashboard': { view: 'dashboard' },


  //Partner Car
  'get /list-car': {
    controller: 'truck',
    action: 'find'
  },
  'post /add-car': {
    controller: 'truck',
    action: 'create'
  },
  'get /add-car': {
    controller: 'truck',
    action: 'index'
  },

  //Driver
  'get /list-driver': {
    controller: 'driver',
    action: 'find'
  },

  'post /add-driver': {
    controller: 'driver',
    action: 'create'
  },

  'get /add-driver': {
    controller: 'driver',
    action: 'index'
  },


  //Route
  // 'get /route': {
  //   controller: 'routename',
  //   action: 'find'
  // },
  'post /routes': {
    controller: 'trip',
    action: 'create'
  },
  'get /route': {
    controller: 'trip',
    action: 'index'
  },
  'get /routes': {
    controller: 'trip',
    action: 'index'
  },

  'post /search/:start/:end': {
    controller: 'trip',
    action: 'find'
  },

  
  // '/list-route': { view: 'list-route' },
  // '/add-route': { view: 'add-route' },
  // '/edit-route': { view: 'edit-route' },


  '/orders': { view: 'orders' },

  '/messages': { view: 'messages' },

  '/profile': { view: 'profile' },

  'get /partner-signup': 'PartnerController.index',

  // 'post /partner-signup': 'PartnerController.signup',
  // 'post /partner/create': 'PartnerController.signup',

  //Searh page 
  // 'POST /search/:start/:stop': 'SearchController.index',
  // '/search': {view: 'search'},

  'POST /search/:start_route/:end_route': { controller: "Search", action: "index" },

  // 'POST /search': 'SearchController.index1',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
