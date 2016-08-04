var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');

var Home = React.createClass({
  render: function() {
    return (
        <div>
            <NavBar/>
            <h1><center>Pension Scheme No 1 </center></h1>
            <h3>The Group is committed to helping the person have a comfortable financial future. <br/><br/>
                As a member of the Scheme, the person can be confident and he/she will receive a guaranteed
                level of pension relative to their ‘final salary’. <br/><br/>
                Membership also helps provide financial security for their family when he/she will die,
                and if the person stops work because of ill health, he/she may be entitled to an immediate pension. <br/><br/>
                How the Scheme works : <br/>
                    The Scheme’s assets are held in a trust completely separately from those of
                    the group and cannot be used for any other purpose.
                    1/60 x Final Pensionable Salary x Pensionable Service = annual pension  <br/><br/>

                   Example : <br/>
   	                Jane retires with a Final Pensionable Salary of £25,000 after completing 30
                    years of Pensionable Service.
                    <br/>
                    Her pension will be calculated as follows:
                    1/60 x £25,000 x 30 = £12,500 a year
	                pensionable salary = basic salary + average of the last 3 years bonuses.
            </h3>
        </div>
    );
  }
});

module.exports = Home;
