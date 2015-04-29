var app = app || {};

app.loginView = (function(selector, controller) {
    function render(selector, controller) {
        $.get('templates/login.html', function (template) {
            var output = Mustache.render(template);
            $(selector).html(output);
        })
            .then(function () {
                $('#loginButton').click(function () {
                    var userName = $('#loginUsername').val();
                    var userPassword = $('#loginPassword').val();
                    controller.loginUser(userName, userPassword);
                    window.location.href = 'index.html#/'
                })
            })
    }

    return {
        render: function (selector, controller) {
            render(selector, controller);
        }
    };
}());