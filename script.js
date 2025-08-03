//your JS code here. If required.
//your JS code here. If required.
const form = document.querySelector("form");
const fontsizeInput = document.getElementById("fontsize");
const fontcolorInput = document.getElementById("fontcolor");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.cookie = `fontsize=${fontsizeInput.value}px; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `fontcolor=${fontcolorInput.value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    applyPreferences();
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function applyPreferences() {
    const fontsize = getCookie("fontsize");
    const fontcolor = getCookie("fontcolor");
    if (fontsize) {
        document.documentElement.style.setProperty("--fontsize", fontsize);
    }
    if (fontcolor) {
        document.documentElement.style.setProperty("--fontcolor", fontcolor);
    }
}

applyPreferences();
