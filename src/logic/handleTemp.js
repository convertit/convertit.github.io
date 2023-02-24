import { Decimal } from '../lib/lib.js';

export function convertTemp(fromUnit, toUnit, num) {
    let convertedNum;
    if (fromUnit === 'celsius') {
        if (toUnit === 'celsius') {
            convertedNum = num;
        } else if (toUnit === 'fahrenheit') {
            convertedNum = convertCtoF(num);
        } else if (toUnit === 'kelvin') {
            convertedNum = num + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedNum = convertFtoC(num);
        } else if (toUnit === 'fahrenheit') {
            convertedNum = num;
        } else if (toUnit === 'kelvin') {
            convertedNum = convertFtoC(num) + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedNum = num - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedNum = convertCtoF(num - 273.15);
        } else if (toUnit === 'kelvin') {
            convertedNum = num;
        }
    }

    return convertedNum;
}

function convertCtoF(x) {
    let xx = new Decimal(x);
    let y = new Decimal(1.8);
    return Number((y).times(xx).plus(32));
}

function convertFtoC(x) {
    let xx = new Decimal(x);
    let y = new Decimal(5);
    return Number(((xx).minus(32)).times(y.dividedBy(9)));
}