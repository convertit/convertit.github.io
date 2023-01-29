import { html } from '../lib/lib.js';
import { engine } from '../logic/engine.js';

let temperatureTemplate = (onConvert, data) => html`
    <div id="input-num">
        <input type="number" id="num" @input=${onConvert} value="0">
        <label for="number" id="from-label">${data.fromLabel ? data.fromLabel : 'Celsius'}</label>
        <p>equals</p>
        <p id="result">${data.result ? data.result : 0}</p>
        <p id="result-unit">${data.resultUnit ? data.resultUnit : 'Celsius'}</p>
        <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
    
    </div>
    
    <div id="box" class="box">
        <form id="tempFrom" class="inner-box" @change=${onConvert}>
            <legend>From Unit</legend>
    
    
            <div class="from">
                <input type="radio" id="celsius" name="from" value="celsius" checked="checked">
                <label for="celsius">Celsius</label>
            </div>
            <div class="from">
                <input type="radio" id="kelvin" name="from" value="kelvin">
                <label for="kelvin">Kelvin</label>
            </div>
            <div class="from">
                <input type="radio" id="fahrenheit" name="from" value="fahrenheit">
                <label for="fahrenheit">Fahrenheit</label>
            </div>
        </form>
    
    
        <form id="tempTo" @change=${onConvert}>
            <legend>To Unit</legend>
            <div class="from">
                <input type="radio" id="to-celsius" name="to" value="celsius" checked="checked">
                <label for="to-celsius">Celsius</label>
            </div>
            <div class="from">
                <input type="radio" id="to-kelvin" name="to" value="kelvin">
                <label for="to-kelvin">Kelvin</label>
            </div>
            <div class="from">
                <input type="radio" id="to-fahrenheit" name="to" value="fahrenheit">
                <label for="to-fahrenheit">Fahrenheit</label>
            </div>
        </form>
    </div>`

export function showTemp(ctx) {
    let keyWord = 'temp';
    ctx.render(temperatureTemplate(onConvert, {}));

    function onConvert(e) {
        let data = engine(keyWord);
        ctx.render(temperatureTemplate(onConvert, data));
    }
}