import { html } from '../lib/lib.js';
import { engine } from '../logic/engine.js';

let temperatureTemplate = (onConvert, data) => html`
    <div id="input-num">
        <input type="number" id="num" @input=${onConvert} value="0">
        <label for="number" id="from-label">${data.fromUnit ? data.fromUnit : 'Celsius'}</label>
        ${data.err ? html`<label class="error">${data.err}</label>` : null}
        <p>equals</p>
        <p id="result">${data.result ? data.result : 0}</p>
        <p id="result-unit">${data.toUnit ? data.toUnit : 'Celsius'}</p>
        <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
    
    </div>
    
    <div id="box" class="box">
        <form id="tempFrom" class="inner-box" @change=${onConvert}>
            <legend>From Unit</legend>
    
    
            <div class="from">
                <input class="hover" type="radio" id="celsius" name="from" value="celsius" checked="checked">
                <label class="hover" for="celsius">Celsius</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="kelvin" name="from" value="kelvin">
                <label class="hover" for="kelvin">Kelvin</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="fahrenheit" name="from" value="fahrenheit">
                <label class="hover" for="fahrenheit">Fahrenheit</label>
            </div>
        </form>
    
    
        <form id="tempTo" @change=${onConvert}>
            <legend>To Unit</legend>
            <div class="from">
                <input class="hover" type="radio" id="to-celsius" name="to" value="celsius" checked="checked">
                <label class="hover" for="to-celsius">Celsius</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="to-kelvin" name="to" value="kelvin">
                <label class="hover" for="to-kelvin">Kelvin</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="to-fahrenheit" name="to" value="fahrenheit">
                <label class="hover" for="to-fahrenheit">Fahrenheit</label>
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