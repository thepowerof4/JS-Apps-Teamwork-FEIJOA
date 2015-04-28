var app = app || {};

app.loginView = (function(selector, controller) {
    function render(selector, controller) {
        $.get('templates/login.html', function (template) {
            var output = Mustache.render(template);
            $(selector).html(output);
        })
        //$.ajax({
        //    type: 'GET',
        //    url: 'templates/login.html',
        //    dataType: 'text',
        //    success: function (template) {
        //        $(selector).html(template);
        //    }
        //})
            .then(function () {
                $('#loginButton').click(function () {
                    var userName = $('#loginUsername').val();
                    var userPassword = $('#loginPassword').val();
                    controller.loginUser(userName, userPassword);
                })
            });
    }

    return {
        render: function (selector, controller) {
            render(selector, controller);
        }
    };
}());