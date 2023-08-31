const Restaurants = require('../Models/restaurant.json');

exports.getRestaurant = (req, res) => {
    res.status(200).json({message: "Restaurants fetched Successfully", restaurants: Restaurants})
}

