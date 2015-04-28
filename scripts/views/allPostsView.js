var app = app || {};

app.allPostsView = (function() {
    function render(controller, selector, data) {
        $.ajax({
            type: 'GET',
            url: 'templates/allPosts.html',
            dataType: 'text',
            success: function (template) {
                $(selector).html(Mustache.render(template, data));
            }
        });
        //$.get('templates/allPosts.html', function (template) {
        //    var output = Mustache.render(template, data);
        //    $(selector).html(output);
        //});
/*            .then(function () {
                $('#addStudent').click(function () {
                    var studentName = $('#name').val();
                    var studentGrade = $('#grade').val();
                    controller.addPost('#students', studentName, studentGrade);
                })
            });*/
    }

    return {
        render: function (controller, selector, data) {
            render(controller, selector, data);
        }
    };
}());