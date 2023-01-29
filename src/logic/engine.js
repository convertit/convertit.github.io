import { convertTemp } from "./handleTemp.js";
import { units } from "./units.js";

export function engine(keyWord) {

    let fromArr = Array.from(document.getElementById(keyWord + 'From').children);
    fromArr.shift();
    let toArr = Array.from(document.getElementById(keyWord + 'To').children);
    toArr.shift();


    let fromUnit = '';
    let toUnit = '';
    let num = Number(document.getElementById('num').value);

    let numInDefault;
    let convertedNum;
    let fromLabel;
    let resultUnit;


    for (let el of fromArr) {
        if (el.children[0].checked) {
            fromUnit = el.children[0].value;
        }
    }

    for (let el of toArr) {
        if (el.children[0].checked) {
            toUnit = el.children[0].value;
        }
    }

    if (keyWord === 'temp') {
        convertedNum = convertTemp(fromUnit, toUnit, num);
        fromLabel = fromUnit;
        resultUnit = toUnit;
    } else {
        numInDefault = num * units()[keyWord][fromUnit];
        convertedNum = numInDefault / units()[keyWord][toUnit];

        fromLabel = fromUnit === 'inch' ? fromUnit + 'es' : fromUnit + 's';
        resultUnit = toUnit === 'inch' ? toUnit + 'es' : toUnit + 's';
    }
    
    let result = Number((convertedNum).toFixed(4));

    return {
        fromLabel,
        result,
        convertedNum,
        resultUnit
    }


}