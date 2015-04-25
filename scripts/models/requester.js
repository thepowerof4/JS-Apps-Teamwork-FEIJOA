var app = app || {};

app.requester = (function() {
    function Requester(){
    }

    Requester.prototype.get = function(URL, headers){
        return makeRequest('GET', URL, headers);
    };

    Requester.prototype.post = function(URL, headers, data){
        return makeRequest('POST', URL, headers, data);
    };

    Requester.prototype.put = function(URL, headers, data){
        return makeRequest('PUT', URL, headers, data); // +id!!
    };

    Requester.prototype.delete = function(URL, headers){
        return makeRequest('DELETE', URL, headers); // + id!!
    };

    function makeRequest(method, URL, headers, data) {
        var deffer = Q.defer();

        $.ajax({
            method: method,
            headers: headers,
            url: URL,
            data: JSON.stringify(data),
            success: function(data) {
                deffer.resolve(data);
            },
            error: function(error) {
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