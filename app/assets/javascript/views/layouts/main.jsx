/**
 * @jsx React.DOM
 */

var React         = require('react');
var Router        = require('react-router');
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;
var RouteHandler  = Router.RouteHandler;
// var Link          = Router.Link;

// Compo
var Home          = require('../home/index.jsx');
var Login         = require('../account/login.jsx');
var Reset         = require('../account/reset.jsx');
var Signup        = require('../account/signup.jsx');
var Navbar        = require('../shared/navbar.jsx');
var Footer        = require('../shared/footer.jsx');
var defer         = require('q').defer;

// This is the main layout for the app
var App = React.createClass({

  render: function() {
    require("../../../stylesheets/application.scss");
    return (
      <div>
        <Navbar />
        <div className="container">
          <RouteHandler />
        </div>
        <Footer />
      </div>
    );
  }

});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="login" handler={Login} />
    <Route name="signup" handler={Signup} />
    <Route name="password-reset" handler={Reset} />
  </Route>
);


module.exports.renderClient = function(callback) {
  Router.run(routes, Router.HistoryLocation, callback);
}

module.exports.renderServer = function(path, callback) {
  Router.run(routes, path, callback);
}
