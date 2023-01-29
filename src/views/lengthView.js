import { html } from '../lib/lib.js';
import { engine } from '../logic/engine.js';

let lengthTemplate = (onConvert, data) => html`
    <div id="input-num">
        <input type="number" id="num" @input=${onConvert} value="0">
        <label for="number" id="from-label">${data.fromLabel ? data.fromLabel : 'kilometers'}</label>
        <p>equals</p>
        <p id="result">${data.result ? data.result : 0}</p>
        <p id="result-unit">${data.resultUnit ? data.resultUnit : 'kilometres'}</p>
        <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
    
    </div>
    
    <div id="box" class="box">
        <form id="lengthFrom" class="inner-box" @change=${onConvert}>
            <legend>From Unit</legend>
    
    
            <div class="from">
                <input type="radio" id="km" name="from" value="kilometre" checked="checked">
                <label for="km">Kilometre</label>
            </div>
            <div class="from">
                <input type="radio" id="mile" name="from" value="mile">
                <label for="mile">Mile</label>
            </div>
            <div class="from">
                <input type="radio" id="m" name="from" value="metre">
                <label for="m">Metre</label>
            </div>
            <div class="from">
                <input type="radio" id="cm" name="from" value="centimetre">
                <label for="cm">Centimetre</label>
            </div>
            <div class="form">
                <input type="radio" id="mm" name="from" value="millimetre">
                <label for="mm">Millimetre</label>
            </div>
            <div class="form">
                <input type="radio" id="mcrm" name="from" value="micrometre">
                <label for="mcrm">Micrometre</label>
            </div>
            <div class="form">
                <input type="radio" id="yard" name="from" value="yard">
                <label for="yard">Yard</label>
            </div>
            <div class="form">
                <input type="radio" id="ft" name="from" value="feet">
                <label for="ft">Foot</label>
            </div>
            <div class="form">
                <input type="radio" id="inch" name="from" value="inch">
                <label for="inch">Inch</label>
            </div>
            <div class="form">
                <input type="radio" id="nmile" name="from" value="nauticalMile">
                <label for="nmile">Nautical Mile</label>
            </div>
            <div class="form">
                <input type="radio" id="furlong" name="from" value="furlong">
                <label for="furlong">Furlong</label>
            </div>
            <div class="form">
                <input type="radio" id="lyr" name="from" value="lightYear">
                <label for="lyr">Light Year</label>
            </div>
        </form>
    
    
        <form id="lengthTo" @change=${onConvert}>
            <legend>To Unit</legend>
            <div class="to">
                <input type="radio" id="to-km" name="to" value="kilometre" checked="checked">
                <label for="to-km">Kilometre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-mile" name="to" value="mile">
                <label for="to-mile">Mile</label>
            </div>
            <div class="to">
                <input type="radio" id="to-m" name="to" value="metre">
                <label for="to-m">Metre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-cm" name="to" value="centimetre">
                <label for="to-cm">Centimetre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-mm" name="to" value="millimetre">
                <label for="to-mm">Millimetre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-mcrm" name="to" value="micrometre">
                <label for="to-mcrm">Micrometre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-yard" name="to" value="yard">
                <label for="to-yard">Yard</label>
            </div>
            <div class="to">
                <input type="radio" id="to-ft" name="to" value="feet">
                <label for="to-ft">Foot</label>
            </div>
            <div class="to">
                <input type="radio" id="to-inch" name="to" value="inch">
                <label for="to-inch">Inch</label>
            </div>
            <div class="to">
                <input type="radio" id="to-nmile" name="to" value="nauticalMile">
                <label for="to-nmile">Nautical Mile</label>
            </div>
            <div class="to">
                <input type="radio" id="to-furlong" name="to" value="furlong">
                <label for="to-furlong">Furlong</label>
            </div>
            <div class="to">
                <input type="radio" id="to-lyr" name="to" value="lightYear">
                <label for="to-lyr">Light Year</label>
            </div>
        </form>
    </div>`

export function showLength(ctx) {
    let keyWord = 'length';
    ctx.render(lengthTemplate(onConvert, {}));

    function onConvert(e) {
        let data = engine(keyWord);
        ctx.render(lengthTemplate(onConvert, data));
    }
}