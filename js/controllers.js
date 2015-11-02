var toDo = angular.module('toDo', []);

toDo.controller('ToDoCtrl', function ($scope, $http) {
    $scope.title="Simple ToDo Test Work";
    $http.get(window.location+'/json/tasks.json').success(function(data){
        $scope.tasks= data;
    });

    $scope.addNewTask = function() {
        $scope.tasks.push ({
            task: $scope.taskName,
            created_at: new Date(),
            expires_at: "04.04.2016",
            done: "false"
        });
        $scope.taskName = "";
    };
    $scope.showText = function (done) {
        return done ? "YES" : "NO";
    };
    $scope.setStyle = function (done) {
        return done ? "color:green" : "color: red; font-weight: bold";
    };
    $scope.predicate = 'expiration';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
});
