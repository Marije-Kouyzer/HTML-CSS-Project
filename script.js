var r = document.querySelector(':root');
var dark_color = 'hsl(201, 80%, 2%)';
var light_color = 'hsl(201, 70%, 99%)';
function setDarkMode() {
    if (r != null) {
        r.style.setProperty('--background-color', dark_color);
        r.style.setProperty('--text-color', light_color);
    }
}
function setLightMode() {
    if (r != null) {
        r.style.setProperty('--background-color', light_color);
        r.style.setProperty('--text-color', dark_color);
    }
}
