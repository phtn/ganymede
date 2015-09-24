Home = React.createClass({

  sign() {
    FlowRouter.go('/login')
  },

  render() {
    let signUp = (
      <div className="centered">
        <paper-button className="btn-big" onClick={this.sign}>
          <span className="user-icon glyphicon glyphicon-user"></span>
          <span className="big-title">sign up</span>
        </paper-button>
      </div>);
      let index_a = (
        <div className="centered">
            <span className="big-title">DJIA</span>
        </div>
      );


    return (
      <div className="component-div git-up-animate">
          <div className="home-card">
              {index_a}
              <br />
              {signUp}
          </div>
      </div>
    )
  }
});


/*
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      owner: Meteor.users.findOne({_id: Meteor.userId()})
    }
  },

  log() {
    if (Session.get('service') == 'google'){
      console.log(Meteor.users.findOne({_id: Meteor.userId()}).services.google.email);
      Session.set('imageId', Meteor.users.findOne({_id: Meteor.userId()}).services.google.id)
    } else {
      console.log(Meteor.users.findOne({_id: Meteor.userId()}).services.facebook.email);
      Session.set('imageId', Meteor.users.findOne({_id: Meteor.userId()}).services.facebook.id)
    }
  },
  render() {

    // let {owner} = this.data;
    // let userName;

    // let pageIs;
    // if (owner) {
      // pageIs = (<div>
        // <paper-button className="log" onClick={this.log}>LOG</paper-button>
        // <span>{userName}</span>

      // </div>);
    // } else {
      // pageIs = (<span className="title">HOME</span>);
    // }

    */
