Profile = React.createClass({
  handleLogout() {
    Meteor.logout()
    FlowRouter.go('/');
  },
  render(){
    return(
      <div className="component-div">
        <paper-shadow z="1" className="shadow-card">
          <div className="home-card">
            <span>PROFILE</span><br/>
            <paper-button onClick={this.handleLogout}>logout</paper-button>
        </div>

        </paper-shadow>
      </div>
    )
  }
})
