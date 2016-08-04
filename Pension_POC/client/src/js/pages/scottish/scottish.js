var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');

var Home = React.createClass({
  render: function() {
    return (
        <div>
            <NavBar/>
            <h1><center>Scottish Widow Pension Scheme</center></h1>
            <h3>There are mainly two participating employers in Scottish Widows. Retirement Benefits Scheme.
                <br/><br/>
                They are
                    1) Scottish Widows Services Limited (Principal Employer).
                    2) Scottish Widows Investment Partnership Limited.

            </h3>
        </div>
    );
  }
});

module.exports = Home;
