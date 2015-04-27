var app = app || {};

app.postDataModel = (function() {
    function PostDataModel(baseUrl, requester, headers) {
        this._requester = requester;
        this._headers = headers;
        this._serviceUrl = baseUrl + 'classes/Post';
    }

    PostDataModel.prototype.getPosts = function () {
        var headers = this._headers.getHeaders();
        return this._requester.get(this._serviceUrl, headers);
    };

    PostDataModel.prototype.addPost = function (post) {
        var headers = this._headers.getHeaders();
        return this._requester.post(this._serviceUrl, headers, post);
    };

    return {
        load: function(baseUrl, requester, headers) {
            return new PostDataModel(baseUrl, requester, headers);
        }
    }
}());