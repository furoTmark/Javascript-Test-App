app.controller('mainController', ['$scope','$http','DataService', function($scope, $http, DataService) {
		$scope.loading = true;

		// GET =====================================================================
		DataService.get()
			.success(function(data) {
				$scope.data = data;
				$scope.loading = false;
});
	}]);