Login = React.createClass({
  loginGoogle() {
    Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				FlowRouter.go('/login')
			}
		});
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
    FlowRouter.go('/')
  },
  render() {
    return(
      <div className="component-div">
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
