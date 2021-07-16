let start = performance.now();
window.onload = () =>{
    let end = performance.now();
    console.log("Page chargée en " + Math.round(end-start)/1000 + " secondes");
}
window.addEventListener("scroll", updateNav);
fetch("assets/html/modals.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.body.innerHTML += data;
    });

function updateNav(): void {
    const presentation = document.getElementById('presentation');
    const skills = document.getElementById('skills');
    const career = document.getElementById('career');
    const portfolio = document.getElementById('portfolio');
    const contact = document.getElementById('contact');
    let nav = document.getElementById('navigation');

    if (presentation.getBoundingClientRect().bottom > (window.innerWidth/7) * -1) {
        removeColors(nav);
        nav.classList.add("bg-blue");
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
        nav.classList.add("bg-red");
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
        nav.classList.add("bg-gray-900");
        nav.classList.add("navbar-dark");
        removeActiveLink();
        document.getElementById('contact-link').classList.add("active");
    }
}

function removeColors(e: Element):void {
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
    e.classList.remove("text-body");
    e.classList.remove("text-white");
    e.classList.remove("text-muted");
    e.classList.remove("navbar-light");
    e.classList.remove("navbar-dark");
}

function removeActiveLink():void {
    let actives = document.querySelectorAll('.active');
    [].forEach.call(actives, function (e: Element) {
        e.classList.remove("active");
    });
}
