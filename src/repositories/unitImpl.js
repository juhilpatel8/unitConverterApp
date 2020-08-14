var unitConverterService = require('../service/unitConverterService');
module.exports = {

    convertUnit: (initialValue, initialUnit, targetUnit, studentResponse)=>{
        var result = "correct";
        var computedResult;
        studentResponse = Math.round(studentResponse * 10)/10;
        switch(initialUnit.toString().toLowerCase()){
            case 'liters':
                computedResult = unitConverterService.convertLiters(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                }
            break;
            case 'tbsp':
                computedResult = unitConverterService.convertTbsp(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                }
            break;
            case 'cubic-inch':
                computedResult = unitConverterService.convertCubicInch(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                }
            break;
            case 'cups':
                computedResult = unitConverterService.convertCups(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'cubic-feet':
                computedResult = unitConverterService.convertCubicFeet(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'gallons':
                computedResult = unitConverterService.convertGallons(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'celsius':
                computedResult = unitConverterService.convertCelsius(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10                
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'fahrenheit':
                computedResult = unitConverterService.convertFahrenheit(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10  
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'kelvin':
                computedResult = unitConverterService.convertKelvin(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='undefined';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10  
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'rankine':
                computedResult = unitConverterService.convertRankine(initialValue, targetUnit);
                if(computedResult === 0)
                {
                    result='undefined';
                    break;
                }
                else
                {
                computedResult = Math.round(computedResult * 10)/10  
                result = computedResult === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            default:
                result = 'invalid';
            break;
        }

        return result;

    } 
}