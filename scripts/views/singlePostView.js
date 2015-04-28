var app = app || {};

app.singlePostView = (function() {
    function render(controller, selector, data, postId) {
        $(selector).html('');
        $.get('templates/singlePost.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).html(output);
        });

        $.get('templates/postComment.html', function (template) {
            var postForm = $("<div>").html(template);
            $(selector + " article").append(postForm);
        }).then(function () {
            if(sessionStorage['logged-in']){
                var user = JSON.parse(sessionStorage['logged-in']);
                $('#author').val(user.username);
            }
         $('#submit').click(function () {
         var author = $('#author').val();
         var content = $('#content').val();
         controller.addComment(author, content, data.objectId);
         })
         });
    }

    return {
        render: function (controller, selector, data) {
            render(controller, selector, data);
        }
    };
}());