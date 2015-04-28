var app = app || {};

app.loginView = (function(selector) {
    function render(selector) {
        $.ajax({
            type: 'GET',
            url: 'templates/login.html',
            dataType: 'text',
            success: function (template) {
                $(selector).html(template);
            }
        });
    }

    return {
        render: function (selector) {
            render(selector);
        }
    };
}());