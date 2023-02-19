import { html } from '../lib/lib.js'
import { engine } from '../logic/engine.js';

let timeTemplate = (onConvert, data) => html`
<div id="input-num">
    <input type="number" id="num" @input=${onConvert} value="0">
    <label for="number" id="from-label">${data.fromUnit ? data.fromUnit : "year"}</label>
    ${data.err ? html`<label class="error">${data.err}</label>` : null}
    <p>equals</p>
    <p id="result">${data.result ? data.result : 0}</p>
    <p id="result-unit">${data.toUnit ? data.toUnit : 'year'}</p>
    <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
</div>

<div id="box">
    <form id="timeFrom" @change=${onConvert}>
        <legend>From Unit</legend>

        <div class="from">
            <input class="hover" type="radio" id="year" name="from" value="year" checked="checked">
            <label class="hover" for="year">Year</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="month" name="from" value="month">
            <label class="hover" for="month">Month</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="week" name="from" value="week">
            <label class="hover" for="week">Week</label>
        </div>
        <div class="from">
            <input class="hover" type="radio" id="day" name="from" value="day">
            <label class="hover" for="day">Day</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="hour" name="from" value="hour">
            <label class="hover" for="hour">Hour</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="minute" name="from" value="minute">
            <label class="hover" for="minute">Minute</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="second" name="from" value="second">
            <label class="hover" for="second">Second</label>
        </div>
        <div class="form">
            <input class="hover" type="radio" id="millisecond" name="from" value="millisecond">
            <label class="hover" for="millisecond">Millisecond</label>
        </div>
    </form>


    <form id="timeTo" @change=${onConvert}>
        <legend>To Unit</legend>

        <div class="to">
            <input class="hover" type="radio" id="to-year" name="to" value="year" checked="checked">
            <label class="hover" for="to-year">Year</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-month" name="to" value="month">
            <label class="hover" for="to-month">Month</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-week" name="to" value="week">
            <label class="hover" for="to-week">Week</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-day" name="to" value="day">
            <label class="hover" for="to-day">Day</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-hour" name="to" value="hour">
            <label class="hover" for="to-hour">Hour</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-minute" name="to" value="minute">
            <label class="hover" for="to-minute">Minute</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-second" name="to" value="second">
            <label class="hover" for="to-second">Second</label>
        </div>
        <div class="to">
            <input class="hover" type="radio" id="to-millisecond" name="to" value="millisecond">
            <label class="hover" for="to-millisecond">Millisecond</label>
        </div>
    </form>
</div>`;

export function showTimeView(ctx) {
    let keyWord = 'time';
    ctx.render(timeTemplate(onConvert, {}));

    function onConvert() {
        let data = engine(keyWord)
        ctx.render(timeTemplate(onConvert, data))
    }
}