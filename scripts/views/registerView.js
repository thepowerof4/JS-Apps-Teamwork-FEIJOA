var app = app || {};

app.registerView = (function(selector, controller) {
    function render(selector, controller) {
        $.ajax({
            type: 'GET',
            url: 'templates/register.html',
            dataType: 'text',
            success: function (template) {
                $(selector).html(template);
            }
        })
            .then(function () {
         $('#registerButton').click(function () {
         var userName = $('#registerUsername').val();
         var userPassword = $('#registerPassword').val();
         controller.addUser(userName, userPassword);
         })
         });
    }

    return {
        render: function (selector, controller) {
            render(selector, controller);
        }
    };
}());