var paisControllers = angular.module("paisControllers",[]);

paisControllers.controller("listaPaisesCtrl", ["$scope","$http",function($scope,$http) {

		var url= "https://restcountries.eu/rest/v1/all";
		$http.get(url).success(function(data){
			$scope.paises= data;
		});
}]);

paisControllers.controller("detallesPaisesCtrl",["$scope", "$http","$routeParams",function($scope,$http,$routeParams){
		var urlDetalles = "https://restcountries.eu/rest/v1/alpha/"+ $routeParams.paisAlpha2Code ;
		$http.get(urlDetalles).success(function(datos){
			$scope.detallePais = datos;
		});

}]);