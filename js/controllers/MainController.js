app.controller('MainController', ['$scope', function($scope) {

	/* 
	* in this version I changed $scope.program to $scope.programs...
	* converted it into an array instead to match what I did in Directives.1
	*/

  $scope.programs = [
  	{
	  	series: "Sherlock",
			// series_img: "img/sherlock.jpg",
			series_img: "http://lorempixel.com/200/200",
	  	genre: "Crime drama",
	  	season: 3,
	  	episode: "The Empty Hearse",
	  	description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night",
	  	datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  	},
  	{
	  	series: "X-Men",
			// series_img: "img/sherlock.jpg",
			series_img: "http://lorempixel.com/200/200",
	  	genre: "Sci fi Action",
	  	season: 6,
	  	episode: "Black Dog",
	  	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque minus, distinctio ullam cum voluptate magni voluptates ipsa temporibus, suscipit officia dignissimos sed, velit. Dicta, facere, quod! Dolore accusamus neque aspernatur repellat error voluptatibus unde ipsum repellendus quis molestiae eum, sapiente debitis magni. Aliquid numquam id omnis maiores officiis expedita quisquam.",
	  	datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  	}
  ];


}]);