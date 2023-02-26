import { html } from '../lib/lib.js';
import { engine } from '../logic/engine.js';

let volumeTemplate = (onConvert, data) => html`
    <div id="input-num">
        <input type="number" id="num" @input=${onConvert} value="0">
        <label for="number" id="from-label">${data.fromUnit ? data.fromUnit : 'millilitre'}</label>
        ${data.err ? html`<label class="error">${data.err}</label>` : null}
        <p>equals</p>
        <p id="result">${data.result ? data.result : 0}</p>
        <p id="result-unit">${data.toUnit ? data.toUnit : 'millilitre'}</p>
        <p class="smaller">${data.convertedNum != data.result ? 'rounded from ' + data.convertedNum : null}</p>
    
    </div>
    
    <div id="box" class="box">
        <form id="volumeFrom" class="inner-box" @change=${onConvert}>
            <legend>From Unit</legend>
    
            <div class="from">
                <input class="hover" type="radio" id="ml" name="from" value="millilitre" checked="checked">
                <label class="hover" for="ml">Millilitre</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="litre" name="from" value="litre">
                <label class="hover" for="litre">Litre</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="cubicCm" name="from" value="cubic cm">
                <label class="hover" for="cubicCm">Cubic cm</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="cubicM" name="from" value="cubic metre">
                <label class="hover" for="cubicM">Cubic Metre</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="cubicInch" name="from" value="cubic inch">
                <label class="hover" for="cubicInch">Cubic Inch</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="cubicFoot" name="from" value="cubic foot">
                <label class="hover" for="cubicFoot">Cubic Foot</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="cubicYard" name="from" value="cubic yard">
                <label class="hover" for="cubicYard">Cubic Yard</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="oilBarrel" name="from" value="oil barrel">
                <label class="hover" for="oilBarrel">Oil Barrel</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="flOunceUS" name="from" value="fluid ounceUS">
                <label class="hover" for="flOunceUS">Fluid Ounce (US)</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="flOunceUK" name="from" value="fluid ounceUK">
                <label class="hover" for="flOunceUK">Fluid Ounce (UK)</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="pintUS" name="from" value="pint US">
                <label class="hover" for="pintUS">Pint (US)</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="pintUK" name="from" value="pint UK">
                <label class="hover" for="pintUK">Pint (UK)</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="quartUS" name="from" value="quart US">
                <label class="hover" for="quartUS">Quart (US)</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="quartUK" name="from" value="quart UK">
                <label class="hover" for="quartUK">Quart (UK)</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="gallonUS" name="from" value="gallon US">
                <label class="hover" for="gallonUS">Gallon (US)</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="gallonUK" name="from" value="gallon UK">
                <label class="hover" for="gallonUK">Gallon (UK)</label>
            </div>
        </form>
    
    
        <form id="volumeTo" @change=${onConvert}>
            <legend>To Unit</legend>

            <div class="to">
                <input class="hover" type="radio" id="to-ml" name="to" value="millilitre" checked="checked">
                <label class="hover" for="to-ml">Millilitre</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-litre" name="to" value="litre">
                <label class="hover" for="to-litre">Litre</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-cubicCm" name="to" value="cubic cm">
                <label class="hover" for="to-cubicCm">Cubic cm</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-cubicM" name="to" value="cubic metre">
                <label class="hover" for="to-cubicM">Cubic Metre</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-cubicInch" name="to" value="cubic inch">
                <label class="hover" for="to-cubicInch">Cubic Inch</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-cubicFoot" name="to" value="cubic foot">
                <label class="hover" for="to-cubicFoot">Cubic Foot</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-cubicYard" name="to" value="cubic yard">
                <label class="hover" for="to-cubicYard">Cubic Yard</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-oilBarrel" name="to" value="oil barrel">
                <label class="hover" for="to-oilBarrel">Oil Barrel</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-flOunceUS" name="to" value="fluid ounceUS">
                <label class="hover" for="to-flOunceUS">Fluid Ounce (US)</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-flOunceUK" name="to" value="fluid ounceUK">
                <label class="hover" for="to-flOunceUK">Fluid Ounce (UK)</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-pintUS" name="to" value="pint US">
                <label class="hover" for="to-pintUS">Pint (US)</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-pintUK" name="to" value="pint UK">
                <label class="hover" for="to-pintUK">Pint (UK)</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-quartUS" name="to" value="quart US">
                <label class="hover" for="to-quartUS">Quart (US)</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-quartUK" name="to" value="quart UK">
                <label class="hover" for="to-quartUK">Quart (UK)</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-gallonUS" name="to" value="gallon US">
                <label class="hover" for="to-gallonUS">Gallon (US)</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-gallonUK" name="to" value="gallon UK">
                <label class="hover" for="to-gallonUK">Gallon (UK)</label>
            </div>
        </form>
    </div>`

export function showVolume(ctx) {
    let keyWord = 'volume';
    ctx.render(volumeTemplate(onConvert, {}));

    function onConvert(e) {
        let data = engine(keyWord);
        ctx.render(volumeTemplate(onConvert, data));
    }
}