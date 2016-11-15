
	// super simple service
	// each function returns a promise object 
app.factory('DataService', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/getData');
			}
		}
	}]);