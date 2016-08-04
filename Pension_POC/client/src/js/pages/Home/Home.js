var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');

var Home = React.createClass({
  render: function() {
    return (
        <div>
            <NavBar/>
            <h1><center>CORPORATE PENSION </center></h1>
            <h3>
            A formal arrangement between a company and its employees
                    - or the employees' union - that provides funding for the employees' retirement.
                    This pool of funds can be financed in several ways and will eventually be used to
                    make periodic payments to retired employees. In most cases, both employer and
                    employees make regular contributions to the plan. In the past, employers were
                    wholly responsible for contributing to the plan based on an employees work,
                    length of employment and position held. bonuses.
            </h3>

        </div>
    );
  }
});

module.exports = Home;
