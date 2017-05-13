var module = require('ui/modules').get('ly_k4p_clock');
module.controller('ClockController', function ($scope, $timeout) {
    var setTime = function () {
        $scope.time = Date.now();
        $timeout(setTime, 1000);
    };
    setTime();
});