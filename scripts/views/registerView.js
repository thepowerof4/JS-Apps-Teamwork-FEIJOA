var app = app || {};

app.registerView = (function(selector) {
    function render(selector) {
        $.ajax({
            type: 'GET',
            url: 'templates/register.html',
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