/*
    Structure of the Zomato Project (Backend):
        - app.js                Main file to start the operation
        - Routes
            - index.js          Routing the requests to appropriate files in Controllers
        
        - Controllers           What type of data is required and fetch from the models.
            - locations.js
            - mealtype.js
            - restaurant.js

        - Models                Data Models
            - locations.json
            - mealtype.json
            - restaurant.json
*/

const express = require('express');                      // inserted the express  package
const routes = require('./Routes/index');

const app = express();                                   // assigning express component in app variable
app.use('/',routes);                                    // if any request are made it redirects to ruotes

const port = 3000;
const hostname = 'localhost';

app.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);


});