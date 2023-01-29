import { html, render, page } from '../lib/lib.js';

const main = document.querySelector('main');

export function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.width = window.innerWidth;
    ctx.height = window.innerHeight;
    
    next();
}

export function selectedLink(ctx, next) {
    if (ctx.width > 600) {
        let navLinksArr = Array.from(document.querySelectorAll('.nav'));

        navLinksArr.forEach(x => {
            if (x.href.includes(ctx.path)) {
                x.classList.add('selected');
            } else {
                x.classList = 'nav';
            }
        })
        next();
    } else {
        let navLinksArr = Array.from(document.querySelectorAll('.mobileNav'));
        let mobileSelected = document.querySelector('.mobileSelected');
        navLinksArr.forEach(x => {
            if (x.href.includes(ctx.path) && ctx.path !== '/') {
                let newElement = document.createElement('p');
                newElement.innerHTML = x.innerHTML;
                newElement.classList.add('mobileNavP');

                mobileSelected.innerHTML = '';
                mobileSelected.appendChild(newElement);
            }
        })
        next();
    }
}

export function onChangeWidth() {
    let width = window.innerWidth;
    let screenType = localStorage.getItem('screenType')
    if (screenType) {
        if (screenType === 'small' && width > 600) {
            localStorage.setItem('screenType', 'big');
            location.reload();
            return;
        } else if (screenType ==='big' && width <= 600) {
            localStorage.setItem('screenType', 'small');
            location.reload();
            return;
        }
    } else {
        if (width <= 600) {
            localStorage.setItem('screenType', 'small');
        } else {
            localStorage.setItem('screenType', 'big');
        }
    }

}