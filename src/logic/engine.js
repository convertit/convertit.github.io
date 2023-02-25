import { Decimal } from '../lib/lib.js';

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
        let x;
        try {
            x = new Decimal(num);
        } catch (error) {
            return {err: 'Input invalid or too big!'};
        }
        let y = new Decimal(units()[keyWord][fromUnit]);
        let z = new Decimal(units()[keyWord][toUnit]);
        convertedNum = Number(x.times(y).dividedBy(z));
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