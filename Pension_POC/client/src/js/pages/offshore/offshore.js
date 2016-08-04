var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');

var Home = React.createClass({
  render: function() {
    return (
        <div>
            <NavBar/>
            <h1><center>Offshore Pension Scheme</center></h1>
            <h3>This plan is mainly for deferred members.
                As a deferred member, you are entitled to valuable benefits that help provide financial security
                for both you and your dependents
                <br/><br/>
                Deferred members means
                    1)Former Lloyds Banking Group colleagues
                    2)Current Lloyds Banking Group colleagues
            </h3>
        </div>
    );
  }
});

module.exports = Home;
