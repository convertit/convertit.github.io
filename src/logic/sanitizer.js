export function sanitizer(input) {
    const re = new RegExp(/^\-?\w*\ ?\/?\.?\w+$/);
    
    if (re.test(input)) {
        return input;
    }
}