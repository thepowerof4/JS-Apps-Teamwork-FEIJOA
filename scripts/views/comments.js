var app = app || {};

app.commentsView = (function() {
    function render(controller, selector, data) {
        $.get('templates/comment.html', function (template) {
            var comments = {
                comments : data
            };
            var output = Mustache.render(template, comments);
            var div = $("<div>").html(output);
            $(selector + " article").append(div);
        });

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