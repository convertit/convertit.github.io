import { html } from '../lib/lib.js';
import { engine } from '../logic/engine.js';

let memoryTemplate = (onConvert, data) => html`
    <div id="input-num">
        <input type="number" id="num" @input=${onConvert} value="0">
        <label for="number" id="from-label">${data.fromUnit ? data.fromUnit : 'bit'}</label>
        ${data.err ? html`<label class="error">${data.err}</label>` : null}
        <p>equals</p>
        <p id="result">${data.result ? data.result : 0}</p>
        <p id="result-unit">${data.toUnit ? data.toUnit : 'bit'}</p>
        <p class="smaller">${data.convertedNum !== data.result ? 'rounded from ' + data.convertedNum : null}</p>

    </div>
    
    <div id="box" class="box">
        <form id="memoryFrom" class="inner-box" @change=${onConvert}>
            <legend>From Unit</legend>
    
    
            <div class="from">
                <input class="hover" type="radio" id="bit" name="from" value="bit" checked="checked">
                <label class="hover" for="bit">b</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="byte" name="from" value="byte">
                <label class="hover" for="byte">B</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="kbit" name="from" value="kilobit">
                <label class="hover" for="kbit">Kb</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="kb" name="from" value="kylobyte">
                <label class="hover" for="kb">KB</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="mbit" name="from" value="megabit">
                <label class="hover" for="mbit">Mb</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="mb" name="from" value="megabyte">
                <label class="hover" for="mb">MB</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="gbit" name="from" value="gigabit">
                <label class="hover" for="gbit">Gb</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="gb" name="from" value="gigabyte">
                <label class="hover" for="gb">GB</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="tbit" name="from" value="terabit">
                <label class="hover" for="tbit">Tb</label>
            </div>
            <div class="from">
                <input class="hover" type="radio" id="tb" name="from" value="terabyte">
                <label class="hover" for="tb">TB</label>
            </div>
        </form>
    
    
        <form id="memoryTo" @change=${onConvert}>
            <legend>To Unit</legend>
            <div class="to">
                <input class="hover" type="radio" id="to-bit" name="to" value="bit" checked="checked">
                <label class="hover" for="to-bit">b</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-byte" name="to" value="byte">
                <label class="hover" for="to-byte">B</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-kbit" name="to" value="kilobit">
                <label class="hover" for="to-kbit">Kb</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-kb" name="to" value="kylobyte">
                <label class="hover" for="to-kb">KB</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-mbit" name="to" value="megabit">
                <label class="hover" for="to-mbit">Mb</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-mb" name="to" value="megabyte">
                <label class="hover" for="to-mb">MB</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-gbit" name="to" value="gigabit">
                <label class="hover" for="to-gbit">Gb</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-gb" name="to" value="gigabyte">
                <label class="hover" for="to-gb">GB</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-tbit" name="to" value="terabit">
                <label class="hover" for="to-tbit">Tb</label>
            </div>
            <div class="to">
                <input class="hover" type="radio" id="to-tb" name="to" value="terabyte">
                <label class="hover" for="to-tb">TB</label>
            </div>
        </form>
    </div>`

export function showMemory(ctx) {
    let keyWord = 'memory';
    ctx.render(memoryTemplate(onConvert, {}));

    function onConvert(e) {
        let data = engine(keyWord);
        ctx.render(memoryTemplate(onConvert, data));
    }
}