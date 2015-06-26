app.directive('programListing', function() {
  return {
    restrict: 'AE',
    scope: {
    	datasource: '=',
      listing: '='
    },
    templateUrl: 'js/directives/programListing.html'
  };
});