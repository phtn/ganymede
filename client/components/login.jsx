Login = React.createClass({
  loginGoogle() {
    Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				FlowRouter.go('/login')
			}
		});
    Session.set('service', 'google');
    FlowRouter.go('/')
  },
  loginFacebook() {
    Meteor.loginWithFacebook({
			requestPermission: ['email', 'public_profile', 'user_friends']
		}, function(err) {
			if (err) {
				FlowRouter.go('/login')
			}
		});
    Session.set('service', 'facebook');
    FlowRouter.go('/')
  },
  render() {
    return(
      <div className="component-div bloom-animate">
        <paper-shadow z="3" className="shadow-card">
          <div className="login-card">
            <span className="spn">LOGIN WITH</span><br /><br />
            <paper-button className="login-btn" id="google" onClick={this.loginGoogle}>GOOGLE</paper-button><br /><br />
            <span className="or">- OR -</span><br/><br/>
            <paper-button className="login-btn" id="facebook" onClick={this.loginFacebook}>FACEBOOK</paper-button><br />
          </div>
        </paper-shadow>
      </div>
    )
  }
});
