import { html } from '../lib/lib.js';
import { engine } from '../logic/engine.js';

let areaTemplate = (onConvert, data) => html`
    <div id="input-num">
        <input type="number" id="num" @input=${onConvert} value="0">
        <label for="number" id="from-label">${data.fromLabel ? data.fromLabel : 'kilometers'}</label>
        <p>equals</p>
        <p id="result">${data.result ? data.result : 0}</p>
        <p id="result-unit">${data.resultUnit ? data.resultUnit : 'kilometres'}</p>
        <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
    
    </div>
    
    <div id="box" class="box">
        <form id="areaFrom" class="inner-box" @change=${onConvert}>
            <legend>From Unit</legend>
    
            <div class="from">
                <input type="radio" id="hectare" name="from" value="hectare" checked="checked">
                <label for="hectare">Hectare</label>
            </div>
            <div class="from">
                <input type="radio" id="acre" name="from" value="acre">
                <label for="acre">Acre</label>
            </div>
            <div class="from">
                <input type="radio" id="decre" name="from" value="decre">
                <label for="decre">Decre</label>
            </div>
            <div class="from">
                <input type="radio" id="are" name="from" value="are">
                <label for="are">Are</label>
            </div>
            <div class="from">
                <input type="radio" id="sqKm" name="from" value="sq kilometre">
                <label for="sqKm">Sq Kilometre</label>
            </div>
            <div class="from">
                <input type="radio" id="sqM" name="from" value="sq metre">
                <label for="sqM">Sq Metre</label>
            </div>
            <div class="from">
                <input type="radio" id="sqCm" name="from" value="sq centimetre">
                <label for="sqCm">Sq Centimetre</label>
            </div>
            <div class="from">
                <input type="radio" id="sqMm" name="from" value="sq millimetre">
                <label for="sqMm">Sq Millimetre</label>
            </div>
            <div class="from">
                <input type="radio" id="sqMile" name="from" value="sq mile">
                <label for="sqMile">Sq Mile</label>
            </div>
            <div class="from">
                <input type="radio" id="sqYard" name="from" value="sq yard">
                <label for="sqYard">Sq Yard</label>
            </div>
            <div class="from">
                <input type="radio" id="sqFt" name="from" value="sq feet">
                <label for="sqFt">Sq Foot</label>
            </div>
            <div class="from">
                <input type="radio" id="sqInch" name="from" value="sq inche">
                <label for="sqInch">Sq Inch</label>
            </div>

        </form>

        <form id="areaTo" class="inner-box" @change=${onConvert}>
            <legend>To Unit</legend>
            
            <div class="to">
                <input type="radio" id="to-hectare" name="to" value="hectare" checked="checked">
                <label for="to-hectare">Hectare</label>
            </div>
            <div class="to">
                <input type="radio" id="to-acre" name="to" value="acre">
                <label for="to-acre">Acre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-decre" name="to" value="decre">
                <label for="to-decre">Decre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-are" name="to" value="are">
                <label for="to-are">Are</label>
            </div>
            <div class="to">
                <input type="radio" id="to-sqKm" name="to" value="sq kilometre">
                <label for="to-sqKm">Sq Kilometre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-sqM" name="to" value="sq metre">
                <label for="to-sqM">Sq Metre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-sqCm" name="to" value="sq centimetre">
                <label for="to-sqCm">Sq Centimetre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-sqMm" name="to" value="sq millimetre">
                <label for="to-sqMm">Sq Millimetre</label>
            </div>
            <div class="to">
                <input type="radio" id="to-sqMile" name="to" value="sq mile">
                <label for="to-sqMile">Sq Mile</label>
            </div>
            <div class="to">
                <input type="radio" id="to-sqYard" name="to" value="sq yard">
                <label for="to-sqYard">Sq Yard</label>
            </div>
            <div class="to">
                <input type="radio" id="to-sqFt" name="to" value="sq feet">
                <label for="to-sqFt">Sq Foot</label>
            </div>
            <div class="to">
                <input type="radio" id="to-sqInch" name="to" value="sq inche">
                <label for="to-sqInch">Sq Inch</label>
            </div>

        </form>
    
    </div>`

export function showArea(ctx) {
    let keyWord = 'area';
    ctx.render(areaTemplate(onConvert, {}));

    function onConvert(e) {
        let data = engine(keyWord);
        ctx.render(areaTemplate(onConvert, data));
    }
}