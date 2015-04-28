var app = app || {};

(function() {
    var appId = 'AUrAY2nIGawbqF8fQpEMp7DL1EOfjkIcoZefeHM5';
    var restAPIKey = 'YbsULbuKXCclao5kMluFhwEU60pmzru8vdHMORL2';

    var headers = app.headers.load(appId, restAPIKey);
    var requester = app.requester.load();
    var userModel = app.userDataModel.load('https://api.parse.com/1/', requester, headers);
    var model = app.postDataModel.load('https://api.parse.com/1/', requester, headers);

    var userController = app.userController.load(userModel);
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
            app.loginView.render(selector, userController);
        });

        this.get('#/register', function() {
            app.registerView.render(selector, userController);
        });

    });

    app.router.run('#/');
}());