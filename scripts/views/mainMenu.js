(function () {
    if(sessionStorage['logged-in']){
        $("#mainMenuButtons").empty();
        var user = JSON.parse(sessionStorage['logged-in']);
        $("#mainMenuButtons")
            .append($("<a href=\"#/\">Home |  </a>"))
            .append($("<span>").text(user.username));
    }else{
        $("#mainMenuButtons").empty();

        var homeBtn = $("<a href=\"#/\">Home |</a>");
        var logBtn = $("<a href=\"#/login\">Login |</a>");
        var regBtn = $("<a href=\"#/register\">Register</a>");

        $("#mainMenuButtons")
            .append(homeBtn)
            .append(logBtn)
            .append(regBtn);
    }
}());