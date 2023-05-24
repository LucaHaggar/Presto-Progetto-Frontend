// richiamo e catturo nav
let navbar = document.querySelector("#navbar");
let links = document.querySelectorAll(".nav-link");
let logoNavbar = document.querySelector("#logoNavbar");
// richiamo div per cursore
let outline = document.querySelector(".outline");
let cursor = document.querySelector(".cursor");
// richiamo bottone per animazione header
let button = document.querySelector("#button");
let animazioneUno = document.querySelector("#animazioneUno");
// richiato container navbar
let navbarContainer = document.querySelector("#navbarContainer");

// richiamo e catturo classe opener
let opener = document.querySelector(".opener");
let circle = document.querySelector(".circle");

let teachers = [
  {
    name: "Matteo",
    description: `Docente Frontend di Aulab specializzato in effetti sonori BOM <i class="fa-solid fa-bomb text-red"></i>  , PUFF , PAFF , POFF e TOP`,
    src: "https://aulab.it/img/team/matteo-sisto.png",
  },
  {
    name: "Marco",
    description: "Coordinatore Hackademy Italia JavaScript specialista",
    src: "https://aulab.it/img/team/marco-insabato.png",
  },
  {
    name: "Nicola",
    description: "Full-Stack Developer JavaScript Specialist",
    src: "https://aulab.it/img/team/nicola-menonna.png",
  },
  {
    name: "Davide",
    description: "Backend Developer Laravel Specialist",
    src: "https://aulab.it/img/team/Davide-Cariola.png",
  },
];

// cancelliamo i 4 div da html e li creiamo tramite js come segue:
teachers.forEach((docente) => {
  let div = document.createElement("div");
  div.classList.add("moved");
  div.style.backgroundImage = `url(${docente.src})`;
  circle.appendChild(div);
});

// richiamo e catturo i div moved
let movedDivs = document.querySelectorAll(".moved");

// start function per cursore custom
document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  outline.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
  cursor.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
});
// end function per cursore custom

// start scroll navbar
window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;

  if (scrolled > 0) {
    navbar.classList.remove("bg-black");
    navbar.classList.add("bg-yellow");
    navbar.style.height = "120px";
    links.forEach((link) => {
      link.style.color = "var(--black)";
      if (incontroFooter == false) {
        navbar.classList.remove("bg-yellow");
        navbarContainer.style.backgroundColor = "yellow";
        logoNavbar.src = "http://127.0.0.1:5500/media/logo-nero.png";
      }
    });
  } else {
    navbar.classList.add("bg-black");
    navbar.style.height = "80px";
    links.forEach((link) => {
      link.style.color = "var(--white)";
      navbarContainer.style.backgroundColor = "black";
      logoNavbar.src = "http://127.0.0.1:5500/media/logo-bianco.png";
    });
  }
});

// end scroll navbar

// start section chi siamo

let check = false;

let flipCard = document.querySelector(".flip-card");

opener.addEventListener("click", () => {
  if (check == false) {
    opener.style.transform = "rotate(45deg)";
    movedDivs.forEach((moved, i) => {
      let angle = (360 * i) / movedDivs.length;
      moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
    });
    check = true;
  } else {
    check = false;
    opener.style.transform = "rotate(0deg)";
    movedDivs.forEach((moved, i) => {
      moved.style.transform = `rotate(0deg) translate(0px)`;
    });
    flipCard.classList.add("d-none");
  }
});

let innerFace = document.querySelector(".inner-face");
let cardName = document.querySelector("#cardName");
let cardDescription = document.querySelector("#cardDescription");

movedDivs.forEach((moved, i) => {
  moved.addEventListener("click", () => {
    flipCard.classList.remove("d-none");
    let docente = teachers[i];
    innerFace.style.backgroundImage = `url(${docente.src})`;
    cardName.innerHTML = docente.name;
    cardDescription.innerHTML = docente.description;
  });
});

// start change color navbar quando incontra il footer
let footerChangeColor = document.querySelector("#footerChangeColor");
let incontroFooter = false;

let observerFooter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      incontroFooter = true;
      navbar.style.backgroundColor = "var(--neon-border-color)";
      navbarContainer.style.backgroundColor = "var(--neon-border-color)";
    } else {
      incontroFooter = false;
      navbar.style.backgroundColor = "yellow";
      navbarContainer.style.backgroundColor = "black";
    }
  });
});
observerFooter.observe(footerChangeColor);
