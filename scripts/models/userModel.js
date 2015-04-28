app.userDataModel = (function() {
    function UserDataModel(baseUrl, requester, headers) {
        this._requester = requester;
        this._headers = headers;
        this._serviceUrl = baseUrl + 'classes/_User/';
        this._loginUrl = baseUrl + 'login/';
        this._baseUrl = baseUrl;
    }

    UserDataModel.prototype.addUser = function (user) {
        var headers = this._headers.getHeaders();
        return this._requester.post(this._serviceUrl, headers, user);
    };

    UserDataModel.prototype.loginUser = function (username, password) {
        var headers = this._headers.getHeaders();
        username = 'username=' + username;
        password = 'password=' + password;
        return this._requester.get(this._loginUrl, headers, username, password);
    };

    return {
        load: function(baseUrl, requester, headers) {
            return new UserDataModel(baseUrl, requester, headers);
        }
    }
}());