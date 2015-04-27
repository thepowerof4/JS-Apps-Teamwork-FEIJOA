var app = app || {};

(function() {
    var appId = 'AUrAY2nIGawbqF8fQpEMp7DL1EOfjkIcoZefeHM5';
    var restAPIKey = 'YbsULbuKXCclao5kMluFhwEU60pmzru8vdHMORL2';

    var headers = app.headers.load(appId, restAPIKey);
    var requester = app.requester.load();
    var model = app.postDataModel.load('https://api.parse.com/1/', requester, headers);
    var controller = app.postsController.load(model);

    app.router = Sammy(function () {
        var selector = '#wrapper';

        this.get('#/', function () {
            controller.loadPosts(selector);
        });

        this.get('#/viewPost/:id', function() {
            var postId = this.params['id'];
            controller.viewSinglePost(selector, postId);
        });

        this.get('#/login', function() {
            app.loginView.render(selector);
        });

    });

    app.router.run('#/');
}());