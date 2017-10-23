
var app = angular.module('mainApp', []);

/*
        MAIN CONTROLLER
*/
app.controller('mainController', function($scope) {
    /* VARIABLES */
    $scope.contentFile  = "home.html";
    $scope.subPage      = "monsters/monsters.html";

    /* FUNCTIONS */
    $scope.navigate = function(path) {
        $scope.contentFile  = path;
        $scope.subPage      = "monsters/monsters.html";
    };

    $scope.subNavigate = function(path) {
        $scope.subPage = path;
    };
});


/*
        MONSTER CONTROLLER
*/
app.controller('monsterController', function($scope) {
    /* VARIABLES */
    $scope.monsterList  = [];
    $scope.monster      = {};

    /* FUNCTIONS */
    $scope.loadMonsters = function() {
        var file = new XMLHttpRequest();
        file.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                $scope.monsterList = JSON.parse(file.responseText);
            }
        };
        file.open("GET", "../../data/5e-SRD-Monsters.json", false);
        file.send();
    }

    $scope.loadMonsterPage = function(monster) {
        $scope.monster = monster;
        console.log ($scope.monster);
        $scope.subNavigate('monsters/monster.html');
    }

    $scope.findMonster = function(name) {
        for (let curr of $scope.monsterList) {
            if (curr.name === name) {
                return curr;
            }
        }
    }

    $scope.sortTable = function(attribute) {
        console.log (attribute);
    }

    $scope.modiferOf = function(value) {
        let modifier = Math.floor((value - 10) / 2);
        return value < 10 ? modifier : "+" + modifier;
    }
});
