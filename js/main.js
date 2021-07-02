const presentation = document.getElementById('presentation');
const skills = document.getElementById('skills');
const career = document.getElementById('career');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const metas = document.getElementsByTagName('meta');

let nav = document.getElementById('navigation');
let isDarkMode = false;
window.addEventListener("scroll", updateNav);
document.getElementById('darkButton').addEventListener("click", toggleDarkMode);

document.getElementById('realised').innerText += getMeta("author");

fetch("./html/modals.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("body").innerHTML += data;
    });

function updateNav() {
    console.log();
    
    if (presentation.getBoundingClientRect().bottom > (window.innerWidth/7)*-1) {
        removeColors(nav);
        nav.classList.add("bg-primary");
        nav.classList.add("navbar-dark");
        removeActiveLink();
        document.getElementById('presentation-link').classList.add("active");
    } else if (skills.getBoundingClientRect().bottom > (window.innerWidth / 7) * -1) {
        removeColors(nav);
        nav.classList.add("bg-body");
        nav.classList.add("navbar-light");
        removeActiveLink();
        document.getElementById('skills-link').classList.add("active");
    } else if (career.getBoundingClientRect().bottom > (window.innerWidth / 7) * -1) {
        removeColors(nav);
        nav.classList.add("bg-danger");
        nav.classList.add("navbar-dark");
        removeActiveLink();
        document.getElementById('career-link').classList.add("active");
    } else if (portfolio.getBoundingClientRect().bottom > (window.innerWidth / 7) * -1) {
        removeColors(nav);
        nav.classList.add("bg-body");
        nav.classList.add("navbar-light");
        removeActiveLink();
        document.getElementById('portfolio-link').classList.add("active");
    } else {
        removeColors(nav);
        nav.classList.add("bg-dark");
        nav.classList.add("navbar-dark");
        removeActiveLink();
        document.getElementById('contact-link').classList.add("active");
    }
}

function removeColors(e) {
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
    e.classList.remove("text-body");
    e.classList.remove("text-white");
    e.classList.remove("text-muted");
    e.classList.remove("navbar-light");
    e.classList.remove("navbar-dark");
}

function removeActiveLink() {
    
    let actives = document.querySelectorAll('.active');
    [].forEach.call(actives, function (e) {
        e.classList.remove("active");
    });
}

function toggleDarkMode() {
    let light = document.getElementById('light-style');
    let dark = document.getElementById('dark-style');
    if (!isDarkMode) {
        light.setAttribute("disabled", "true");
        dark.setAttribute("media", "(prefers-color-scheme: light)");
        isDarkMode = true;
    } else {
        light.removeAttribute("disabled", "false");
        dark.setAttribute("media", "(prefers-color-scheme: dark)");
        isDarkMode = false;
    }
}

function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
        }
    }

    return '';
}