Meteor.publish('showUsers', function() {
  return Meteor.users.find();
});

Meteor.startup(function() {
  //if ()
});
