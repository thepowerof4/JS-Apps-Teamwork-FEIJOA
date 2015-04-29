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
            tags: (tags.replace(/\s+/g, '')).split(',')
        };

        this._model.addPost(post)
            .then(function () {
                app.addPostView.render(selector, post);
            }, function (error) {
                console.log(error.responseText);
            })
    };

    PostsController.prototype.addComment = function (author, content, postId) {
        console.log(postId);
        var comment = {
            author: author,
            commentContent: content,
            post: {
                '__type': 'Pointer',
                'className': 'Post',
                'objectId' : postId
            }
        };
        this._model.addComment(JSON.stringify(comment));
    };

    PostsController.prototype.viewSinglePost = function (selector, postId) {
        var _this = this;
        _this._model.getSinglePost(postId)
            .then(function (singlePost) {
                _this._model.getComments(singlePost.objectId)
                    .then(function (comments) {
                        app.commentsView.render(selector, comments.results, postId);
                    }, function () {
                        console.log("has Error");
                    });

                app.singlePostView.render(_this, selector, singlePost);
                _this._model.incrementPostVisits(postId, singlePost.visitCount + 1);

            }, function (error) {
                console.log(error.responseText);
            })
    };

    return {
        load: function (model) {
            return new PostsController(model);
        }
    }
}());