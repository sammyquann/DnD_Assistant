

var app = angular.module('mainApp', []);


app.controller('mainCtrl', function($scope) {
    $scope.contentFile = "home.html";
    $scope.monsterList = [];

    $scope.navigate = function(path) {
        $scope.contentFile = path;
    };

    $scope.loadMonsters = function() {
        var file = new XMLHttpRequest();
        file.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                $scope.monsterList = JSON.parse(file.responseText);
            }
        };
        file.open("GET", "../../data/5e-SRD-Monsters.json", false);
        file.send();
    };

    $scope.sortTable = function(attribute) {
        console.log (attribute);
    };

});
