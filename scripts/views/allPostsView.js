var app = app || {};

app.allPostsView = (function() {
    function render(controller, selector, data) {
        $.get('templates/allPosts.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).html(output);
        })
            .then(function () {
                    $.get('templates/asideBar.html', function (template) {
                        var output = Mustache.render(template, data);
                        $(selector).append(output);
                    })
            })
            .then(function () {
                if(sessionStorage["logged-in"]){
                    $("#mainMenuButtons").empty();
                    var user = JSON.parse(sessionStorage['logged-in']);
                    $("#mainMenuButtons")
                        .append($("<a href=\"#/\">Home |  </a>"))
                        .append($("<span>").text(user.username));
                    $.get('templates/postForm.html', function (template) {
                        var output = Mustache.render(template, data);
                        $(selector).append(output);
                        $('#submit').click(function () {
                            var title = $('#title').val();
                            var content = $('#content').val();
                            var tags = $('#tags').val();
                            controller.addPost(selector, title, content, tags);
                        })
                    })
                }
            }
        );
    }

    return {
        render: function (controller, selector, data) {
            render(controller, selector, data);
        }
    };
}());