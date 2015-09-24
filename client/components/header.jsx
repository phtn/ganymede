Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  logIn() {
    FlowRouter.go('/login')
  },
  goProfile() {
    FlowRouter.go('/profile')
  },
  handleLogout() {
    Meteor.logout()
  },
  goHome() {
    FlowRouter.go('/')
  },
  render() {
    Meteor.subscribe('showUsers')
    let loginButton;
    let {currentUser} = this.data;
    if (currentUser) {
      loginButton = (<paper-icon-button className="sign-in pull-right" icon="settings" onClick={this.goProfile}></paper-icon-button>)
    } else {
      loginButton = (<paper-icon-button className="sign-in pull-right" icon="account-box" onClick={this.logIn}></paper-icon-button>)
    }
    return(
      <paper-shadow z="1">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
              <span className="brand" onClick={this.goHome}>CALLISTO</span>
              {loginButton}
          </div>
        </div>
      </nav>
    </paper-shadow>
    )
  }
})
