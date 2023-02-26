import { html, render, page } from '../lib/lib.js';

const mobileNav = document.querySelector('#mobileNav');

const mobileNavDiv = (toggleMenu) => html`
        <div id="navBeside" @click=${toggleMenu}>
        </div>
        <div id="navDiv">
            <ul>
                <li><a href="/length" id="btn-length" class="mobileNav" @click=${toggleMenu}>
                        <i class="fa-solid fa-ruler-horizontal unitLogo"></i>Length</a></li>
        
                <li><a href="/area" id="btn-length" class="mobileNav" @click=${toggleMenu}>
                        <i class="fa-solid fa-chart-area unitLogo"></i></i>Area</a></li>
        
                <li><a href="/time" id="btn-time" class="mobileNav" @click=${toggleMenu}>
                        <i class="fa-regular fa-clock unitLogo"></i>Time</a></li>
        
                <li><a href="/weight" id="btn-weight" class="mobileNav" @click=${toggleMenu}>
                        <i class="fa-solid fa-scale-unbalanced unitLogo"></i>Weight</a></li>
        
                <li><a href="/temperature" id="btn-temp" class="mobileNav" @click=${toggleMenu}>
                        <i class="fa-solid fa-temperature-half unitLogo"></i>Temperature</a></li>
        
                <li><a href="/memory" id="btn-memory" class="mobileNav" @click=${toggleMenu}>
                        <i class="fa-solid fa-sd-card unitLogo"></i>Memory</a></li>
        
                <li><a href="/speed" id="btn-speed" class="mobileNav" @click=${toggleMenu}>
                        <i class="fa-solid fa-gauge-high unitLogo"></i>Speed</a></li>

                <li><a href="/volume" id="btn-volume" class="mobileNav" @click=${toggleMenu}>
                        <i class="fa-solid fa-prescription-bottle unitLogo"></i>Volume</a></li>
            </ul>
        
        </div>`

export function showNav(ctx, next) {
    if (ctx.width > 600) {
        let navTemplate = () => html`
            <nav id="unit-types">
                <a href="/length" id="btn-length" class="nav">Length</a>
                <a href="/area" id="btn-area" class="nav">Area</a>
                <a href="/time" id="btn-time" class="nav">Time</a>
                <a href="/weight" id="btn-weight" class="nav">Weight</a>
                <a href="/temperature" id="btn-temp" class="nav">Temperature</a>
                <a href="/memory" id="btn-memory" class="nav">Memory</a>
                <a href="/speed" id="btn-speed" class="nav">Speed</a>
                <a href="/volume" id="btn-volume" class="nav">Volume</a>
            </nav>`
        render(navTemplate(), document.querySelector('header'));
    } else {
        let mobileNavTemplate = (toggleMenu) => html`
        <i id="navIcon" class="fa-solid fa-bars-staggered fa-2xl" @click=${toggleMenu}></i>
        `

        render(mobileNavTemplate(toggleMenu), document.querySelector('header'));

    }

    next();
}
export function toggleMenu() {
    if (mobileNav.innerHTML === '') {
        render(mobileNavDiv(toggleMenu), mobileNav);
        toggleNavIcon();
    } else {
        let navDiv = document.getElementById('navDiv');
        let navBeside = document.getElementById('navBeside');
        if (navDiv.style.display === '') {
            navDiv.style.display = 'none';
            navBeside.style.display = 'none';
        } else if (navDiv.style.display === 'block') {
            navDiv.style.display = 'none';
            navBeside.style.display = 'none';
        } else {
            navDiv.style.display = 'block';
            navBeside.style.display = 'block';
        }
        toggleNavIcon();
    }
}

function toggleNavIcon() {
    let navIcon = document.getElementById('navIcon');
    if (navIcon.classList.contains('fa-bars-staggered')) {
        navIcon.classList.replace('fa-bars-staggered', 'fa-xmark');
    } else {
        navIcon.classList.replace('fa-xmark', 'fa-bars-staggered');
    }
}