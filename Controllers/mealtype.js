const Mealtypes = require('../Models/mealtype.json');

exports.getMealtype = (req, res) => {
    res.status(200).json({message: "Mealtype fetched Successfully", mealtypes: Mealtypes})
}