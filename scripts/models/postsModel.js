var app = app || {};

app.postDataModel = (function() {
    function PostDataModel(baseUrl, requester, headers) {
        this._requester = requester;
        this._headers = headers;
        this._serviceUrl = baseUrl + 'classes/Post/';
        this._baseUrl = baseUrl;
    }

    PostDataModel.prototype.getPosts = function () {
        var headers = this._headers.getHeaders();
        return this._requester.get(this._serviceUrl, headers);
    };

    PostDataModel.prototype.addPost = function (post) {
        var headers = this._headers.getHeaders();
        post = JSON.stringify(post);
        return this._requester.post(this._serviceUrl, headers, post);
    };

    PostDataModel.prototype.getSinglePost = function (postId) {
        var headers = this._headers.getHeaders();
        return this._requester.get(this._serviceUrl + postId, headers);
    };

    PostDataModel.prototype.getComments = function (postId) {
        var headers = this._headers.getHeaders();
        return this._requester.get(this._baseUrl + 'classes/Comment?where={"post":{"__type": "Pointer","className": "Post","objectId": "' + postId + '"}}', headers);
    };

    PostDataModel.prototype.addComment = function (comment) {
        var headers = this._headers.getHeaders();
        return this._requester.post(this._baseUrl + 'classes/Comment', headers, comment);
    };

    PostDataModel.prototype.incrementPostVisits = function (postId, newVisitCount) {
        var headers = this._headers.getHeaders();
        var data = '{ "visitCount": ' + newVisitCount + '}';
        return this._requester.put(this._serviceUrl + postId, headers, data);
    };

    return {
        load: function(baseUrl, requester, headers) {
            return new PostDataModel(baseUrl, requester, headers);
        }
    }
}());