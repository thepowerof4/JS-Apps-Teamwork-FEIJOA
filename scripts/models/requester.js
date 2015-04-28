var app = app || {};

app.requester = (function() {
    function Requester() {
    }

    Requester.prototype.get = function (url, headers, username, password) {
        return makeRequest('GET', headers, url, username, password);
    };

    Requester.prototype.post = function (url, headers, data) {
        return makeRequest('POST', headers, url, data);
    };

    Requester.prototype.put = function(URL, headers, data){
        return makeRequest('PUT', headers, URL, data);
    };

    Requester.prototype.delete = function(URL, headers){
        return makeRequest('DELETE', URL, headers);
    };

    function makeRequest(method, headers, url, data, password) {
        var deffer = Q.defer();
        if(password) {
            data = encodeURI(data);
            password = encodeURI(password);
            data = data + '&' + password;
        }
        $.ajax({
            method: method,
            headers: headers,
            url: url,
            data: data,
            success: function (data) {
                deffer.resolve(data);
            },
            error: function (error) {
                deffer.reject(error);
            }
        });

        return deffer.promise;
    }

    return {
        load: function () {
            return new Requester();
        }
    }
}());