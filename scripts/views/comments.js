var app = app || {};

app.commentsView = (function() {
    function render(selector, data) {
        $.get('templates/comment.html', function (template) {
            var comments = {
                comments : data
            };
            var output = Mustache.render(template, comments);
            var div = $("<div>").html(output);
            $(selector + " article").append(div);
        });
    }

    return {
        render: function (selector, data) {
            render(selector, data);
        }
    };
}());