import { html } from '../lib/lib.js';
import { engine } from '../logic/engine.js';

let weightTemplate = (onConvert, data) => html`
<div id="input-num">
    <input type="number" id="num" @input=${onConvert} value="0">
    <label for="number" id="from-label">${data.fromLabel ? data.fromLabel : 'kilograms'}</label>
    <p>equals</p>
    <p id="result">${data.result ? data.result : 0}</p>
    <p id="result-unit">${data.resultUnit ? data.resultUnit : 'kilograms'}</p>
    <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
</div>

<div id="box">
    <form id="weightFrom" @change=${onConvert}>
        <legend>From Unit</legend>

        <div class="from">
            <input type="radio" id="kg" name="from" value="kilogram" checked="checked">
            <label for="kg">Kilogram</label>
        </div>
        <div class="from">
            <input type="radio" id="pound" name="from" value="pound">
            <label for="pound">Pound</label>
        </div>
        <div class="from">
            <input type="radio" id="gr" name="from" value="gram">
            <label for="gr">Gram</label>
        </div>
        <div class="from">
            <input type="radio" id="mg" name="from" value="milligram">
            <label for="mg">Milligram</label>
        </div>
        <div class="form">
            <input type="radio" id="ounce" name="from" value="ounce">
            <label for="ounce">Ounce</label>
        </div>
        <div class="form">
            <input type="radio" id="troyOunce" name="from" value="troy ounce">
            <label for="troyOunce">Troy ounce</label>
        </div>
        <div class="form">
            <input type="radio" id="grain" name="from" value="grain">
            <label for="grain">Grain</label>
        </div>
        <div class="form">
            <input type="radio" id="stone" name="from" value="stone">
            <label for="stone">Stone</label>
        </div>
        <div class="form">
            <input type="radio" id="ton" name="from" value="ton">
            <label for="ton">Ton</label>
        </div>
    </form>


    <form id="weightTo" @change=${onConvert}>
        <legend>To Unit</legend>

        <div class="to">
            <input type="radio" id="to-kg" name="to" value="kilogram" checked="checked">
            <label for="to-kg">Kilogram</label>
        </div>
        <div class="to">
            <input type="radio" id="to-pound" name="to" value="pound">
            <label for="to-pound">Pound</label>
        </div>
        <div class="to">
            <input type="radio" id="to-gr" name="to" value="gram">
            <label for="to-gr">Gram</label>
        </div>
        <div class="to">
            <input type="radio" id="to-mg" name="to" value="milligram">
            <label for="to-mg">Milligram</label>
        </div>
        <div class="to">
            <input type="radio" id="to-ounce" name="to" value="ounce">
            <label for="to-ounce">Ounce</label>
        </div>
        <div class="form">
            <input type="radio" id="to-troyOunce" name="to" value="troy ounce">
            <label for="to-troyOunce">Troy ounce</label>
        </div>
        <div class="to">
            <input type="radio" id="to-grain" name="to" value="grain">
            <label for="to-grain">Grain</label>
        </div>
        <div class="to">
            <input type="radio" id="to-stone" name="to" value="stone">
            <label for="to-stone">Stone</label>
        </div>
        <div class="to">
            <input type="radio" id="to-ton" name="to" value="ton">
            <label for="to-ton">Ton</label>
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