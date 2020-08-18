var unitConverterService = require('../service/unitConverterService');

 class UnitController {

/**
 * find unit conversion 
 *
 * @param req
 * @param res
 */

    static findConversion(req, res) {
    var initialValue = req.body.initialValue;
    var initialUnit = req.body.initialUnit;
    var targetUnit = req.body.targetUnit;
    var studentResponse = req.body.studentResponse;
    let result = unitConverterService.convertUnit(initialValue, initialUnit, targetUnit,studentResponse);
    let resultMessage = { 'output' : result};
    return res.status(200).send(resultMessage);
   
}
}
export default UnitController;
