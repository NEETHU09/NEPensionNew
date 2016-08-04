var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');

var Home = React.createClass({
  render: function() {
    return (
        <div>
            <NavBar/>
            <h1><center>Pension Scheme No 2 </center></h1>
            <h3>Additional features provided by Pension Scheme 2 is the person don’t
                have to make any contributions to the Scheme.
                <br/><br/>
                The Group meets all the costs of running the Scheme and providing their benefits,
                so they don’t have to pay anything <br/>
                This Scheme is no longer open to new members.
                Membership before 2 April 2010 are only eligible for this scheme
            </h3>
        </div>
    );
  }
});

module.exports = Home;
