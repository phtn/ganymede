Meteor.publish('showUsers', function() {
  return Meteor.users.find();
});
