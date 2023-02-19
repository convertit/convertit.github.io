import { html } from '../lib/lib.js';
import { engine } from '../logic/engine.js';

let weightTemplate = (onConvert, data) => html`
<div id="input-num">
    <input type="number" id="num" @input=${onConvert} value="0">
    <label for="number" id="from-label">${data.fromUnit ? data.fromUnit : 'kilogram'}</label>
    ${data.err ? html`<label class="error">${data.err}</label>` : null}
    <p>equals</p>
    <p id="result">${data.result ? data.result : 0}</p>
    <p id="result-unit">${data.toUnit ? data.toUnit : 'kilogram'}</p>
    <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
</div>

<div id="box">
    <form id="weightFrom" @change=${onConvert}>
        <legend>From Unit</legend>

        <div class="from">
            <input class="hover" type="radio" id="kg" name="from" value="kilogram" checked="checked">
            <label class="hover" for="kg">Kilogram</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="pound" name="from" value="pound">
            <label class="hover" for="pound">Pound</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="gr" name="from" value="gram">
            <label class="hover" for="gr">Gram</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="mg" name="from" value="milligram">
            <label class="hover" for="mg">Milligram</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="ounce" name="from" value="ounce">
            <label class="hover" for="ounce">Ounce</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="troyOunce" name="from" value="troy ounce">
            <label class="hover" for="troyOunce">Troy ounce</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="grain" name="from" value="grain">
            <label class="hover" for="grain">Grain</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="stone" name="from" value="stone">
            <label class="hover" for="stone">Stone</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="ton" name="from" value="ton">
            <label class="hover" for="ton">Ton</label>
        </div>
    </form>


    <form id="weightTo" @change=${onConvert}>
        <legend>To Unit</legend>

        <div class="to">
            <input class="hover" type="radio" id="to-kg" name="to" value="kilogram" checked="checked">
            <label class="hover" for="to-kg">Kilogram</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-pound" name="to" value="pound">
            <label class="hover" for="to-pound">Pound</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-gr" name="to" value="gram">
            <label class="hover" for="to-gr">Gram</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-mg" name="to" value="milligram">
            <label class="hover" for="to-mg">Milligram</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-ounce" name="to" value="ounce">
            <label class="hover" for="to-ounce">Ounce</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="to-troyOunce" name="to" value="troy ounce">
            <label class="hover" for="to-troyOunce">Troy ounce</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-grain" name="to" value="grain">
            <label class="hover" for="to-grain">Grain</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-stone" name="to" value="stone">
            <label class="hover" for="to-stone">Stone</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-ton" name="to" value="ton">
            <label class="hover" for="to-ton">Ton</label>
        </div>
    </form>
</div>`

export function showWeightView(ctx) {
    let keyWord = 'weight';
    ctx.render(weightTemplate(onConvert, {}));

    function onConvert(e) {
        let data = engine(keyWord);
        ctx.render(weightTemplate(onConvert, data));
    }
}