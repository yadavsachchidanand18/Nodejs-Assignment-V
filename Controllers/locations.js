const Locations = require('../Models/location.json');

exports.getLocations = (req, res) => {
    res.status(200).json({message:"locations fetched successfully", locations: Locations });
}