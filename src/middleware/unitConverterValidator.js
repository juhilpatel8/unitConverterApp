var validator = require('validator');
var constants = require('../config/config');

module.exports.validateUnit = function (req, res, next) {

     //validate if initial unit and target unit is string
    if (req.method === 'POST') {
        if (!validator.isAlpha(req.body.initialUnit) && !validator.isAlpha(req.body.targetUnit)) {
            return res.status(400).send({
                errorMessage: 'Invalid Request!! initialUnit and targetUnit valid values are [tbsp,gallons,cups,cubic-inch,cubic-feet,celsius,kelvin,rankine,fahrenheit,liters] !!'
            });

        }

        //validate if initialValue and studentResponse is number
        if (isNaN(req.body.initialValue) || isNaN(req.body.studentResponse)) {
            return res.status(400).send({
                errorMessage: 'Invalid Request!! initialValue and studentResponse needs to be number'
            });

        }

        //check if initialUnit and targetUnit are same
        if(req.body.initialUnit === req.body.targetUnit){
            return res.status(400).send({
                errorMessage: 'Invalid Request!! initialUnit and targetUnit are same !!'
            });
        }

        //check initialUnit and targetUnit are valid
        if(!constants.validUnit.includes(req.body.initialUnit.toString().toLowerCase()) || !constants.validUnit.includes(req.body.targetUnit.toString().toLowerCase()) ){
            return res.status(400).send({
                errorMessage: 'Invalid Request!! initialUnit or targetUnit does not look correct;valid values are [tbsp,gallons,cups,cubic-inch,cubic-feet,celsius,kelvin,rankine,fahrenheit,liters]'
            });
        }


        //check body request keys
        if (!req.body.initialUnit || !req.body.initialValue || !req.body.studentResponse || !req.body.targetUnit) {
            return res.status(400).send({
                errorMessage: 'Invalid json Request,valid keys are [initialUnit,initialValue,targetUnit,studentResponse] !!'
            });
        }

     //validate if the body is empty for POST calls
    if (req.method === 'POST' && req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).send({
            errorMessage: 'Invalid Request!! post body is empty!!'
        });
    }

    }
    // go to the next routes
    next();
}