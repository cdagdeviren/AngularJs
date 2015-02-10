/**
 * Created by cdagdeviren on 10.02.15.
 */
angular.module('cdagdeviren', ['productModule']).controller('HomeController', ['$scope', function ($scope) {
    $scope.calculate = function () {
        switch ($scope.optionsValue) {
            case '+':
                $scope.resultValue = $scope.intFirstValue + $scope.intSecondValue;
                break;
            case '-':
                $scope.resultValue = $scope.intFirstValue - $scope.intSecondValue;
                break;
            case '*':
                $scope.resultValue = $scope.intFirstValue * $scope.intSecondValue;
                break;
            case '/':
                $scope.resultValue = $scope.intFirstValue / $scope.intSecondValue;
                break;
        }
    };

    $scope.numbers = [{id: 1, name: "A"}, {id: 2, name: "AA"}, {id: 3, name: "AAA"}, {id: 4, name: "AAAA"},];


    $scope.alertModel = function () {
        alert($scope.numberItem);
    }
}]);

angular.module('productModule',[]).controller('ProductsController', ['$scope', function ($scope) {
    $scope.sortBy = 'ProductName';
    $scope.reverse = false;

    $scope.productList = [{ProductName: 'Domates', Category: 'Sebze', ProductPurchase: '2.25', ExpireDate: '2015-02-31'},
        {ProductName: 'Biber', Category: 'Sebze', ProductPurchase: '3.00', ExpireDate: '2015-02-19'},
        {ProductName: 'Hıyar', Category: 'Sebze', ProductPurchase: '1.25', ExpireDate: '2015-02-24'},
        {ProductName: 'Marul', Category: 'Sebze', ProductPurchase: '3.50', ExpireDate: '2015-02-10'},
        {ProductName: 'Elma', Category: 'Meyve', ProductPurchase: '1.00', ExpireDate: '2015-02-01'},
        {ProductName: 'Armut', Category: 'Meyve', ProductPurchase: '3.50', ExpireDate: '2015-02-03'},
        {ProductName: 'Kiraz', Category: 'Meyve', ProductPurchase: '5.99', ExpireDate: '2015-02-18'},
        {ProductName: 'Çilek', Category: 'Meyve', ProductPurchase: '8.50', ExpireDate: '2015-02-12'}];

    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    }
}]);
