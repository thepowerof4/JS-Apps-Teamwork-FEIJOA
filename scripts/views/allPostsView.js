var app = app || {};

app.allPostsView = (function() {
    function render(controller, selector, data) {
        $.get('templates/allStudents.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).html(output);
        })
            .then(function () {
                $('#addStudent').click(function () {
                    var studentName = $('#name').val();
                    var studentGrade = $('#grade').val();
                    controller.addPost('#students', studentName, studentGrade);
                })
            });
    }

    return {
        render: function (controller, selector, data) {
            render(controller, selector, data);
        }
    };
}());