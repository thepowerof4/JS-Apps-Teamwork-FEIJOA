var app = app || {};

app.singlePostView = (function() {
    function render(controller, selector, data) {
        $.ajax({
            type: 'GET',
            url: 'templates/singlePost.html',
            dataType: 'text',
            success: function (template) {
                $(selector).html(Mustache.render(template, data));
            }
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