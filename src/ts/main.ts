enum darkmode {
    auto = 0,
    enabled = 1,
    disabled = -1
}

let start = performance.now();
window.onload = () => {
    let end = performance.now();
    let colorThemeSwitcher: any = document.getElementById("colorThemeSwitcher");
    changeTheme(colorThemeSwitcher);
    window.addEventListener("scroll", updateNav);
    colorThemeSwitcher.addEventListener("click", () => {changeTheme(colorThemeSwitcher) });
    console.log("Page chargée en " + Math.round(end-start)/1000 + " secondes");
}

let DEBUG:boolean = false;
fetch("assets/html/modals.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.body.innerHTML += data;
    });

let darkPref: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function getDarkmode(value:String): darkmode{
    if(DEBUG)console.log("value : " + value);
    switch(Number(value)){
        case darkmode.enabled:
            if(DEBUG) console.log("get darkmode : " + darkmode.enabled);
            return darkmode.enabled;
        case darkmode.disabled:
            if(DEBUG) console.log("get darkmode : " + darkmode.disabled);
            return darkmode.disabled;
        default :
            if(DEBUG) console.log("get darkmode : " + darkmode.auto);
            return darkmode.auto;
    }
}

function setDarkmode(e:any): void {
    currentTheme = e;
    localStorage.removeItem("theme");
    localStorage.setItem("theme", String(previousDarkmode(e)));
    if(DEBUG)console.log("set local storage and theme : " + e);
}

function previousDarkmode(d: darkmode): darkmode{
    switch(d){
        case darkmode.auto: return darkmode.disabled;
        case darkmode.enabled: return darkmode.auto;
        case darkmode.disabled: return darkmode.enabled;
        default: return null;
    }
}

function nextDarkmode(d: darkmode): darkmode{
    switch(d){
        case darkmode.auto: return darkmode.enabled;
        case darkmode.enabled: return darkmode.disabled;
        case darkmode.disabled: return darkmode.auto;
        default: return null;
    }
}

let currentTheme: darkmode;
if(localStorage.getItem("theme")) {
    if(DEBUG)console.log("local storage not null ("+ localStorage.getItem("theme")+")");
    currentTheme = getDarkmode(localStorage.getItem("theme"));
}
else {
    if(DEBUG)console.log("local storage null ("+ localStorage.getItem("theme")+")");
    currentTheme = darkmode.disabled;
}
function updateDarkmodeButton(e:any): void {
    switch (currentTheme) {
        case darkmode.auto:
            e.innerHTML = '🌗';
            if(DEBUG)console.log("darkmode : Auto")
            break;
        case darkmode.enabled:
            e.innerHTML = '🌙';
            if(DEBUG)console.log("darkmode : Dark")
            break;
        default:
            e.innerHTML = '☀️';
            if(DEBUG)console.log("darkmode : Light")
            break;
    }
}

function changeTheme(e: any): void {
    let classes = document.querySelectorAll(".darkmode-auto, .darkmode-enabled, .darkmode-disabled");
    removeDarkmodeClass(classes);
    addDarkmodeClass(classes);
    updateNav();
    updateDarkmodeButton(e);
}

function removeDarkmodeClass(a: any): void {
    [].forEach.call(a, function (e: Element) {
        e.classList.remove("darkmode-auto");
        e.classList.remove("darkmode-enabled");
        e.classList.remove("darkmode-disabled");
    });
}

function addDarkmodeClass(a: any): void {
    switch (currentTheme) {
        case darkmode.auto:
            [].forEach.call(a, function (e: Element) {
                e.classList.add("darkmode-enabled");
            });
            setDarkmode(darkmode.enabled);
            break;
        case darkmode.enabled:
            [].forEach.call(a, function (e: Element) {
                e.classList.add("darkmode-disabled");
            });
            setDarkmode(darkmode.disabled);
            break;
        case darkmode.disabled:
            [].forEach.call(a, function (e: Element) {
                e.classList.add("darkmode-auto");
            });
            setDarkmode(darkmode.auto);
            break;
    }
}

function updateNav(): void {
    darkPref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const presentation = document.getElementById('presentation');
    const skills = document.getElementById('skills');
    const career = document.getElementById('career');
    const portfolio = document.getElementById('portfolio');
    const contact = document.getElementById('contact');
    let nav = document.getElementById('navigation');

    if (presentation.getBoundingClientRect().bottom > (window.innerWidth / 7) * -1) {
        removeColors(nav);
        nav.classList.add("bg-blue");
        nav.classList.add("navbar-dark");
        removeActiveLink();
        document.getElementById('presentation-link').classList.add("active");
    } else if (skills.getBoundingClientRect().bottom > (window.innerWidth / 7) * -1) {
        removeColors(nav);
        if ((currentTheme === darkmode.auto && darkPref) || currentTheme === darkmode.enabled) nav.classList.add("bg-dark");
        else nav.classList.add("bg-light");
        if ((currentTheme === darkmode.auto && darkPref) || currentTheme === darkmode.enabled) nav.classList.add("navbar-dark");
        else nav.classList.add("navbar-light");
        removeActiveLink();
        document.getElementById('skills-link').classList.add("active");
    } else if (career.getBoundingClientRect().bottom > (window.innerWidth / 7) * -1) {
        removeColors(nav);
        nav.classList.add("bg-red");
        nav.classList.add("navbar-dark");
        removeActiveLink();
        document.getElementById('career-link').classList.add("active");
    } else if (portfolio.getBoundingClientRect().bottom > (window.innerWidth / 7) * -1) {
        removeColors(nav);
        if ((currentTheme === darkmode.auto && darkPref) || currentTheme === darkmode.enabled) nav.classList.add("bg-dark");
        else nav.classList.add("bg-light");
        if ((currentTheme === darkmode.auto && darkPref) || currentTheme === darkmode.enabled) nav.classList.add("navbar-dark");
        else nav.classList.add("navbar-light");
        removeActiveLink();
        document.getElementById('portfolio-link').classList.add("active");
    } else {
        removeColors(nav);
        nav.classList.add("bg-gray-900");
        nav.classList.add("navbar-dark");
        removeActiveLink();
        document.getElementById('contact-link').classList.add("active");
    }
}

function removeColors(e: Element): void {
    e.classList.remove("bg-blue");
    e.classList.remove("bg-red");
    e.classList.remove("bg-gray-900");
    e.classList.remove("bg-primary");
    e.classList.remove("bg-secondary");
    e.classList.remove("bg-danger");
    e.classList.remove("bg-light");
    e.classList.remove("bg-dark");
    e.classList.remove("bg-white");
    e.classList.remove("bg-body");
    e.classList.remove("text-primary");
    e.classList.remove("text-secondary");
    e.classList.remove("text-dark");
    e.classList.remove("text-light");
    e.classList.remove("text-white");
    e.classList.remove("text-muted");
    e.classList.remove("navbar-light");
    e.classList.remove("navbar-dark");
}

function removeActiveLink(): void {
    let actives = document.querySelectorAll('.active');
    [].forEach.call(actives, function (e: Element) {
        e.classList.remove("active");
    });
}
