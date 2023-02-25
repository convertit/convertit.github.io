import { html } from '../lib/lib.js'
import { engine } from '../logic/engine.js';

let speedTemplate = (onConvert, data) => html`
<div id="input-num">
    <input type="number" id="num" @input=${onConvert} value="0">
    <label for="number" id="from-label">${data.fromUnit ? data.fromUnit : "kmph"}</label>
    ${data.err ? html`<label class="error">${data.err}</label>` : null}
    <p>equals</p>
    <p id="result">${data.result ? data.result : 0}</p>
    <p id="result-unit">${data.toUnit ? data.toUnit : 'kmph'}</p>
    <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
</div>

<div id="box">
    <form id="speedFrom" @change=${onConvert}>
        <legend>From Unit</legend>

        <div class="from">
            <input class="hover" type="radio" id="kmph" name="from" value="kmph" checked="checked">
            <label class="hover" for="kmph">Kilometre/hour</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="mph" name="from" value="mph">
            <label class="hover" for="mph">Miles/hour</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="mps" name="from" value="mps">
            <label class="hover" for="mps">Metre/second</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="fps" name="from" value="fps">
            <label class="hover" for="fps">Foot/second</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="knot" name="from" value="knot">
            <label class="hover" for="knot">Knot</label>
        </div>
    </form>


    <form id="speedTo" @change=${onConvert}>
        <legend>To Unit</legend>

        <div class="to">
            <input class="hover" type="radio" id="to-kmph" name="to" value="kmph" checked="checked">
            <label class="hover" for="to-kmph">Kilometre/hour</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-mph" name="to" value="mph">
            <label class="hover" for="to-mph">Miles/hour</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-mps" name="to" value="mps">
            <label class="hover" for="to-mps">Metre/second</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-fps" name="to" value="fps">
            <label class="hover" for="to-fps">Foot/second</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-knot" name="to" value="knot">
            <label class="hover" for="to-knot">Knot</label>
        </div>
    </form>
</div>`;

export function showSpeedView(ctx) {
    let keyWord = 'speed';
    ctx.render(speedTemplate(onConvert, {}));

    function onConvert() {
        let data = engine(keyWord)
        ctx.render(speedTemplate(onConvert, data))
    }
}