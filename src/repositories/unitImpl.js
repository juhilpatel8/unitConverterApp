var unitConverterService = require('../service/unitConverterService');
module.exports = {

    convertUnit: (initialValue, initialUnit, targetUnit, studentResponse)=>{
        var result = "correct";
        var resultTemp;
        studentResponse = Math.round(studentResponse * 10)/10;
        switch(initialUnit.toString().toLowerCase()){
            case 'liters':
                resultTemp = unitConverterService.convertLiters(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                }
            break;
            case 'tbsp':
                resultTemp = unitConverterService.convertTbsp(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                }
            break;
            case 'cubic-inch':
                resultTemp = unitConverterService.convertCubicInch(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                }
            break;
            case 'cups':
                resultTemp = unitConverterService.convertCups(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'cubic-feet':
                resultTemp = unitConverterService.convertCubicFeet(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'gallons':
                resultTemp = unitConverterService.convertGallons(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'celsius':
                resultTemp = unitConverterService.convertCelsius(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10                
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'fahrenheit':
                resultTemp = unitConverterService.convertFahrenheit(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='invalid';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10  
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'kelvin':
                resultTemp = unitConverterService.convertKelvin(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='undefined';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10  
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            case 'rankine':
                resultTemp = unitConverterService.convertRankine(initialValue, targetUnit);
                if(resultTemp === 0)
                {
                    result='undefined';
                    break;
                }
                else
                {
                resultTemp = Math.round(resultTemp * 10)/10  
                result = resultTemp === studentResponse ? 'correct' : 'incorrect';
                break;
                }
            default:
                result = 'invalid';
            break;
        }

        return result;

    } 
}