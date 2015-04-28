var app = app || {};

app.addPostView = (function() {
    function render(selector, data) {
        $.get('templates/newPost.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).append(output);
        })
    }

    return {
        render: function (selector, data) {
            render(selector, data);
        }
    };
}());