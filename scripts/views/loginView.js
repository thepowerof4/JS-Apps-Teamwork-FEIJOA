var app = app || {};

app.loginView = (function(selector) {
    function render(selector) {
        $(selector).load('templates/login.html')



    }

    return {
        render: function (selector) {
            render(selector);
        }
    };
}());