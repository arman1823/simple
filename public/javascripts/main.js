/**
 * Created by arman on 2/18/14.
 */
var scotchnamelist = angular.module('scotchnamelist', []);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.number   = {};
    $scope.string   = {};
    console.log($scope);



    $http.get('/userlist')
        .success(function(data) {
            $scope.userlist = data;
            console.log($scope.userlist);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createuserlist = function() {
        console.log($scope.formData);
        $http.post('/userlist', $scope.formData)
            .success(function(data) {
                $('input').val('');
                $scope.userlist = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.calculate = function() {
       console.log($scope.number);
        $http.post('/calcnumber', $scope.number)
            .success(function(data) {
                console.log(data);
                $('input').val('');
                $scope.sum = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.recursestr = function() {
        console.log($scope.string);
        $http.post('/recursestr', $scope.string)
            .success(function(data) {
                console.log(data);
                $('input').val('');
                $scope.str = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}