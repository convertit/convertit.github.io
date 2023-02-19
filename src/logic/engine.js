import { convertTemp } from "./handleTemp.js";
import { units } from "./units.js";
import { sanitizer } from "./sanitizer.js";

export function engine(keyWord) {

    let fromArr = Array.from(document.getElementById(keyWord + 'From').children);
    fromArr.shift();
    let toArr = Array.from(document.getElementById(keyWord + 'To').children);
    toArr.shift();


    let fromUnit = '';
    let toUnit = '';
    let num;
    let err;
    if (sanitizer(Number(document.getElementById('num').value)) || Number(document.getElementById('num').value) == 0) {
        num = Number(document.getElementById('num').value);
    } else {
        err = 'Input invalid or too big!';
    }

    let numInDefault;
    let convertedNum;


    for (let el of fromArr) {
        if (el.children[0].checked) {
            if (sanitizer(el.children[0].value)) {
                fromUnit = el.children[0].value;
            } else {
                throw new Error('Invalid input!');
            }
        }
    }

    for (let el of toArr) {
        if (el.children[0].checked) {
            if (sanitizer(el.children[0].value)) {
                toUnit = el.children[0].value;
            } else {
                throw new Error('Invalid input!');
            }
        }
    }

    if (keyWord === 'temp') {
        convertedNum = convertTemp(fromUnit, toUnit, num);
        if (convertedNum === undefined) {
            err = 'Input invalid or too big!'
        }
    } else {
        numInDefault = num * units()[keyWord][fromUnit];
        convertedNum = numInDefault / units()[keyWord][toUnit];
    }

    let result;
    err ? result = NaN : result = Number((convertedNum).toFixed(4));

    return {
        fromUnit,
        result,
        convertedNum,
        toUnit,
        err
    }


}