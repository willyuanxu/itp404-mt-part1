let restaurantTemplateString = document.getElementById('restaurant-template').innerHTML;
let renderRestaurants = Handlebars.compile(restaurantTemplateString);

Handlebars.registerHelper('to-url', (link) => {
	return "https://www.instagram.com/" + link;
});

$("body").html('Loading...');
$.getJSON('https://thejsguy.com/teaching/2018/api/v2/restaurants.json').then((response) => {
	let renderedRestaurants = renderRestaurants({
		restaurants : response.data
	})

	$('body').html(renderedRestaurants);
}, function(error){
	console.log(error);
})