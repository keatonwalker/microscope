/**
 * Created by kwalker on 11/17/2015.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});