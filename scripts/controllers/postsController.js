var app = app || {};

app.postsController = (function() {
    function PostsController(model) {
        this._model = model;
    }

    PostsController.prototype.loadPosts = function (selector) {
        var _this = this;
        this._model.getPosts()
            .then(function (postsData) {
                var outputData = {
                    posts: postsData.results
                };

                app.allPostsView.render(_this, selector, outputData);
            }, function (error) {
                console.log(error.responseText);
            })
    };

    PostsController.prototype.addPost = function (selector, title, content, tags) {
        var post = {
            title: title,
            content: content,
            tags: (tags.replace(/\s+/g, '')).split(', ') // Array of tags
        };

        this._model.addPost(post)
            .then(function () {
                app.addPostView.render(selector, post);
            }, function (error) {
                console.log(error.responseText);
            })
    };

    PostsController.prototype.viewPost = function (selector, postId) {

    };

    return {
        load: function (model) {
            return new PostsController(model);
        }
    }
}());