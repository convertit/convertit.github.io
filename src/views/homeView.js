import { html, page } from '../lib/lib.js'

let homeTemplate = () => html`
    <div class="main">
        <!--display: none// to do-->
        <h1 class="main">Welcome to a simple Unit Converter!</h1>
        <h3 class="secondary">Choose a unit from above</h3>
        <p class="note">Keep in mind that this website is still being worked on.
            <br>
            New functionalities will be added soon.
            <br>
            Hope it works for you!
        </p>
    </div>`

export function showHome(ctx) {
    if (ctx.width <= 600) {
        page.redirect('/length');
    }
    
    ctx.render(homeTemplate());
}