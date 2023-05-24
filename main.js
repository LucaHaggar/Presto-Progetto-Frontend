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

// evento per dare hoover ai paragrafi
button.addEventListener("click", () => {
  animazioneUno.classList.toggle("transizioneParagrafi");
  animazioneDue.classList.toggle("transizioneParagrafi");
  animazioneTre.classList.toggle("transizioneParagrafi");
});
// end evento hoover paragrafi

// section contatore numeri

let primoNumero = document.querySelector("#primoNumero");
let secondoNumero = document.querySelector("#secondoNumero");
let terzoNumero = document.querySelector("#terzoNumero");

let confirm = true;

function contatore(n, element, time) {
  let counter = 0;
  let interval = setInterval(() => {
    if (counter < n) {
      counter++;
      element.innerHTML = counter;
    } else {
      clearInterval(interval);
    }
  }, time);

  setTimeout(() => {
    confirm = true;
  }, 8000);
}

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && confirm) {
      contatore(100, primoNumero, 100);
      contatore(200, secondoNumero, 50);
      contatore(300, terzoNumero, 20);
      confirm = false;
    }
  });
});

observer.observe(primoNumero);
// end section contatore

// start section titolo danger / pericolo
function mOver(obj) {
  obj.innerHTML = "Pericolo";
}

function mOut(obj) {
  obj.innerHTML = "Danger";
}
// end section titolo danger / pericolo

// start function meteorite con bottone

function myMove() {
  let id = null;
  const elem = document.querySelector("#animateMeteorite");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      animateMeteorite.classList.remove("mostrati");
      animateMeteorite.classList.add("nasconditi");
      clearInterval(id);
    } else {
      animateMeteorite.classList.remove("nasconditi");
      animateMeteorite.classList.add("mostrati");
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

// end function meteorite con bottone

// start section recensioni carosello

//JS//
//START RECENSIONI CAROSELLO//
//3. Creo un array di oggetti (reviews) seguendo il modello di index.html
let reviews = [
  { user: "Luca", description: `Sito bellissimo`, rank: 5 },
  { user: "Sal", description: `io lo facevo meglio`, rank: 3 },
  { user: "Arina", description: `Sito molto bello`, rank: 4 },
];
//.4 Catturiamo il contenitore swiperWrapper dove andremmo poi ad appendere le varie card
let swiperWrapper = document.querySelector(".swiper-wrapper");
//5.
reviews.forEach((recensione) => {
  //6.creo i div vuoti
  let div = document.createElement("div");
  //7. aggiungo ai div la classe swiper-slide
  div.classList.add("swiper-slide");
  //8. aggiungo lo scheletro che la mia card dovrà avere per ogni recensione
  div.innerHTML = `
    <div class="card-review">
        <p class="testo-custom text-center text-yellow">
        ${recensione.description}</p>
        <h4 class="testo-custom text-center text-white">${recensione.user}</h4>
        <div class="d-flex justify-content-center star">
           
        </div>
    </div>
  `;
  //10. Aggiungo appendChild
  swiperWrapper.appendChild(div);
  // 11 cancello tutte le i ovvero le stelle e creo la classe star al div contenitore
});

// 12 creo variabile che contine tutti i div con la classe star
let stars = document.querySelectorAll(".star");
// 13 per ogni stella devo andare dentro a ogni review e per rank volte devo creare una stella
stars.forEach((star, index) => {
  // 14 per ogni review in posizione index va alla chiave rank e prende il suo valore
  for (let i = 1; i <= reviews[index].rank; i++) {
    // 15 creo la stella
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-star", "text-yellow");
    // 16 vado ad appendere l'icona creata per ogni div star
    star.appendChild(icon);
  }
  // 17 ora creo tante stelle vuote per quante me ne mancano per arrivare a 5
  // 18 creo variabile "difference" che sarà uguale a 5 - il voto dato da ogni utente
  let difference = 5 - reviews[index].rank;
  // 19 creo un altro for  il cui indice questa volta sarà minore uguale a 'difference'
  // 20 dovrò modificare la classe dell'icona per trasformarla in stella vuota
  for (let i = 1; i <= difference; i++) {
    let icon = document.createElement("i");
    icon.classList.add("fa-regular", "fa-star", "text-yellow");
    star.appendChild(icon);
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  effect: "flip",
  grabCursor: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
//END RECENSIONI CAROSELLO//

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
