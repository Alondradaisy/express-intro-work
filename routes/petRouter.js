const express = require("express");
const router = express.Router();
const uuidv4 = require('uuid').v4;

let petFacts = [
    {
        age: 4,
        name: "rex",
    },
]

router.get('/:pet/:age', function(req, res) {
    const age = req.params.age;
    let rexAge;
    petFacts.forEach(function (element) {
        if (element.age === age) {
            rexAge = element;
        };
        if (!rexAge) {
            res.json({message: "The pet name and age is not in our directory. Please try another search."})
        } else {
            res.json({
                rexAge,
            });
        }
    });
});