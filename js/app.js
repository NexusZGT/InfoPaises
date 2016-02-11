var infoPaises = angular.module("infoPaises", ["ngRoute","paisControllers"]);

infoPaises.config(["$routeProvider", function($routeProvider){
		$routeProvider.
		when("/:paisAlpha2Code",{
			templateUrl: "detallesPaises.html",
			controller: "detallesPaisesCtrl"
		}).
		otherwise({
			redirecTo: "/"
		});

}]);