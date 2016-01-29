'use strict'

var app = angular.module('evolvePickerApp',
    ['ngRoute']
).run();

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        controller: 'WaitingController',
        templateUrl: '/partials/lobby.html'
    })
    .when('/start', {
        controller: 'StartController',
        templateUrl: '/partials/start.html'
    }).when('/maps', {
        controller: 'MasterController',
        templateUrl: '/partials/maps.html',
    });
    $locationProvider.html5Mode(true);
});

app.controller('WaitingController', function($scope) {
    console.log('waiting');
});

app.controller('StartController', function($scope) {
    console.log('starting');
});

app.controller('MasterController', function($scope, MAPS) {
    console.log('master');

    $scope.maps = [];
    angular.forEach(MAPS, function(map) {
        $scope.maps.push({
            name: map,
            image: '/img/map/' + map.replace(' ', '_') + '.jpg'
        });
    });


});

app.service('BanManager', function() {
    var maps_ban = [undefined, undefined];
    var maps_select = [undefined, undefined, undefined];

    this.addMapBan = function(team, map) {
        maps_banned[team] = map;
    }

    this.addMapSelect = function(round, map) {
        maps_select[round] = map;
    }
});

app.constant('MAPS', [
    'armory',
    'barracks',
    'distillery',
    'fusion plant',
    'medlab',
    'orbital drill',
    'refueling tower',
    'rendering plant',
    'weather control',
    'wraith trap'
]);