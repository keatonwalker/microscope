/**
 * Created by kwalker on 11/15/2015.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});