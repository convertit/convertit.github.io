import { html } from '../lib/lib.js'
import { engine } from '../logic/engine.js';

let timeTemplate = (onConvert, data) => html`
<div id="input-num">
    <input type="number" id="num" @input=${onConvert} value="0">
    <label for="number" id="from-label">${data.fromLabel ? data.fromLabel : "years"}</label>
    <p>equals</p>
    <p id="result">${data.result ? data.result : 0}</p>
    <p id="result-unit">${data.resultUnit ? data.resultUnit : 'years'}</p>
    <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>
</div>

<div id="box">
    <form id="timeFrom" @change=${onConvert}>
        <legend>From Unit</legend>

        <div class="from">
            <input type="radio" id="year" name="from" value="year" checked="checked">
            <label for="year">Year</label>
        </div>
        <div class="from">
            <input type="radio" id="month" name="from" value="month">
            <label for="month">Month</label>
        </div>
        <div class="from">
            <input type="radio" id="week" name="from" value="week">
            <label for="week">Week</label>
        </div>
        <div class="from">
            <input type="radio" id="day" name="from" value="day">
            <label for="day">Day</label>
        </div>
        <div class="form">
            <input type="radio" id="hour" name="from" value="hour">
            <label for="hour">Hour</label>
        </div>
        <div class="form">
            <input type="radio" id="minute" name="from" value="minute">
            <label for="minute">Minute</label>
        </div>
        <div class="form">
            <input type="radio" id="second" name="from" value="second">
            <label for="second">Second</label>
        </div>
        <div class="form">
            <input type="radio" id="millisecond" name="from" value="millisecond">
            <label for="millisecond">Millisecond</label>
        </div>
    </form>


    <form id="timeTo" @change=${onConvert}>
        <legend>To Unit</legend>

        <div class="to">
            <input type="radio" id="to-year" name="to" value="year" checked="checked">
            <label for="to-year">Year</label>
        </div>
        <div class="to">
            <input type="radio" id="to-month" name="to" value="month">
            <label for="to-month">Month</label>
        </div>
        <div class="to">
            <input type="radio" id="to-week" name="to" value="week">
            <label for="to-week">Week</label>
        </div>
        <div class="to">
            <input type="radio" id="to-day" name="to" value="day">
            <label for="to-day">Day</label>
        </div>
        <div class="to">
            <input type="radio" id="to-hour" name="to" value="hour">
            <label for="to-hour">Hour</label>
        </div>
        <div class="to">
            <input type="radio" id="to-minute" name="to" value="minute">
            <label for="to-minute">Minute</label>
        </div>
        <div class="to">
            <input type="radio" id="to-second" name="to" value="second">
            <label for="to-second">Second</label>
        </div>
        <div class="to">
            <input type="radio" id="to-millisecond" name="to" value="millisecond">
            <label for="to-millisecond">Millisecond</label>
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