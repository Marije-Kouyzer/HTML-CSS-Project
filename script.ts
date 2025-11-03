let r : HTMLElement | null = document.querySelector(':root');
let dark_color : string = 'hsl(201, 80%, 2%)';
let light_color : string = 'hsl(201, 70%, 99%)';

function setDarkMode(): void {
    if (r != null) {
        r.style.setProperty('--background-color', dark_color);
        r.style.setProperty('--text-color', light_color);
    }
}

function setLightMode(): void {
    if (r != null) {
        r.style.setProperty('--background-color', light_color);
        r.style.setProperty('--text-color', dark_color);
    }
}
