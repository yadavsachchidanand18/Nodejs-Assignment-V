const express = require('express');

const locationController = require('../Controllers/locations');
const restaurantController = require('../Controllers/restaurant');
const restaurantControllerByCity = require('../Controllers/restaurantByCity');
const mealtypeController = require('../Controllers/mealtype');

const route = express.Router();

route.get('/locations', locationController.getLocations);
route.get('/restaurants', restaurantController.getRestaurant);
route.get('/restaurants/:city', restaurantControllerByCity.getRestaurantByCity);
route.get('/widget', mealtypeController.getMealtype);

module.exports = route;