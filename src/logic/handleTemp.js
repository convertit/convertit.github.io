

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
    return (9/5)*x + 32;
}

function convertFtoC(x) {
    return (x -32)*(5/9);
}