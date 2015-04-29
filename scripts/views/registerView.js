var app = app || {};

app.registerView = (function(selector, controller) {
    function render(selector, controller) {
        $.get('templates/register.html', function (template) {
            var output = Mustache.render(template);
            $(selector).html(output);
        })
            .then(function () {
             $('#registerButton').click(function () {
                 var userName = $('#registerUsername').val();
                 var userPassword = $('#registerPassword').val();
                 var repeatPassword = $('#registerRepeatPassword').val();
                 if(userPassword == repeatPassword) {
                     controller.addUser(userName, userPassword);
                     $(selector).append('Successfully registered.')
                 } else {
                     $(selector).append('Password doesnt match.')
                 }
             })
         });
    }

    return {
        render: function (selector, controller) {
            render(selector, controller);
        }
    };
}());