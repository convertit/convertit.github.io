import { html } from '../lib/lib.js';
import { engine } from '../logic/engine.js';

let areaTemplate = (onConvert, data) => html`
    <div id="input-num">
        <input type="number" id="num" @input=${onConvert} value="0">
        <label for="number" id="from-label">${data.fromUnit ? data.fromUnit : 'hectare'}</label>
        ${data.err ? html`<label class="error">${data.err}</label>` : null}
        <p>equals</p>
        <p id="result">${data.result ? data.result : 0}</p>
        <p id="result-unit">${data.toUnit ? data.toUnit : 'hectare'}</p>
        <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
    
    </div>
    
    <div id="box" class="box">
        <form id="areaFrom" class="inner-box" @change=${onConvert}>
            <legend>From Unit</legend>
    
            <div class="from">
                <input class="hover" type="radio" id="hectare" name="from" value="hectare" checked="checked">
                <label class="hover" for="hectare">Hectare</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="acre" name="from" value="acre">
                <label class="hover" for="acre">Acre</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="decre" name="from" value="decre">
                <label class="hover" for="decre">Decre</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="are" name="from" value="are">
                <label class="hover" for="are">Are</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="sqKm" name="from" value="sq kilometre">
                <label class="hover" for="sqKm">Sq Kilometre</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="sqM" name="from" value="sq metre">
                <label class="hover" for="sqM">Sq Metre</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="sqCm" name="from" value="sq centimetre">
                <label class="hover" for="sqCm">Sq Centimetre</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="sqMm" name="from" value="sq millimetre">
                <label class="hover" for="sqMm">Sq Millimetre</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="sqMile" name="from" value="sq mile">
                <label class="hover" for="sqMile">Sq Mile</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="sqYard" name="from" value="sq yard">
                <label class="hover" for="sqYard">Sq Yard</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="sqFt" name="from" value="sq feet">
                <label class="hover" for="sqFt">Sq Foot</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="sqInch" name="from" value="sq inches">
                <label class="hover" for="sqInch">Sq Inch</label>
            </div>

        </form>

        <form id="areaTo" class="inner-box" @change=${onConvert}>
            <legend>To Unit</legend>
            
            <div class="to">
                <input class="hover" type="radio" id="to-hectare" name="to" value="hectare" checked="checked">
                <label class="hover" for="to-hectare">Hectare</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-acre" name="to" value="acre">
                <label class="hover" for="to-acre">Acre</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-decre" name="to" value="decre">
                <label class="hover" for="to-decre">Decre</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-are" name="to" value="are">
                <label class="hover" for="to-are">Are</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-sqKm" name="to" value="sq kilometre">
                <label class="hover" for="to-sqKm">Sq Kilometre</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-sqM" name="to" value="sq metre">
                <label class="hover" for="to-sqM">Sq Metre</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-sqCm" name="to" value="sq centimetre">
                <label class="hover" for="to-sqCm">Sq Centimetre</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-sqMm" name="to" value="sq millimetre">
                <label class="hover" for="to-sqMm">Sq Millimetre</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-sqMile" name="to" value="sq mile">
                <label class="hover" for="to-sqMile">Sq Mile</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-sqYard" name="to" value="sq yard">
                <label class="hover" for="to-sqYard">Sq Yard</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-sqFt" name="to" value="sq feet">
                <label class="hover" for="to-sqFt">Sq Foot</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-sqInch" name="to" value="sq inches">
                <label class="hover" for="to-sqInch">Sq Inch</label>
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