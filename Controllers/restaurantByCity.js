const Restaurants = require('../Models/restaurant.json');

exports.getRestaurantByCity = (req, res) => {
    
    const {city} = req.params;
    const filterRestaurant = Restaurants.filter(item => item.city == city)

    res.status(200).json({message: "Restaurants fetched Successfully", restaurants: filterRestaurant})
}