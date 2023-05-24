// richiamo e catturo nav
let navbar = document.querySelector("#navbar");
let links = document.querySelectorAll(".nav-link");
let logoNavbar = document.querySelector("#logoNavbar");
// richiamo div per cursore
let outline = document.querySelector(".outline");
let cursor = document.querySelector(".cursor");
// richiato container navbar
let navbarContainer = document.querySelector("#navbarContainer");

// catturo div per le card
let cardWrapper = document.querySelector("#cardWrapper");

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

// start pagina annunci
fetch("./annunci.json")
  .then((response) => response.json())
  .then((data) => {
    //54.
    data.sort((a, b) => a.price - b.price);
    //5.
    let radioWrapper = document.querySelector("#radioWrapper");
    //15.
    let cardWrapper = document.querySelector("#cardWrapper");

    //6.
    function radioCreate() {
      //7.
      let categories = data.map((annuncio) => annuncio.category);

      //8a.

      // let uniqueCategories =[];

      // //9. inizialmente l'array è vuoto ma di seguito vado a fare un forEach per ogni categoria per riempire l'array con le categorie senza ripeterle
      // categories.forEach((category) =>{
      //     //10. dentro al if aggiungo il segno "!" (not), ovvero per dire che se non include già la categoria, allora la deve aggiungere all'array, se la contiene non la deve aggiungere
      //     if(!uniqueCategories.inclundes(category)){
      //         uniqueCategories.push(category);
      //     }
      // })

      //8b.
      //9.
      let uniqueCategories = Array.from(new Set(categories));

      //10.

      uniqueCategories.forEach((category) => {
        //11.

        let div = document.createElement("div");
        div.classList.add("form-check");
        //12.
        div.innerHTML = `
                <input class="form-check-input" type="radio" name="categories" id="${category}"/>
                <label class="form-check-label" for="${category}">
                    ${category}
                </label>
            `;
        //13.
        radioWrapper.appendChild(div);
      });
    }
    radioCreate();

    //21.
    function truncateWord(string) {
      if (string.length > 15) {
        return string.split(" ")[0] + "...";
      } else {
        return string;
      }
    }

    //16.
    //31.
    function showCards(array) {
      //30.
      cardWrapper.innerHTML = "";
      //17.
      array.forEach((annuncio, i) => {
        let div = document.createElement("div");
        div.classList.add("card-custom");
        //22.
        //23.
        div.innerHTML = `
        <img src="https://picsum.photos/${
          300 + i
        }" alt="immagine casuale" class="img-fluid img-card">
                <p class="ARINA AGGIUNGI UNA CLASSE text-yellow" title="${
                  annuncio.name
                }">${truncateWord(annuncio.name)}</p>
                <p class="ARINA AGGIUNGI UNA CLASSE text-yellow">${
                  annuncio.category
                }</p>
                <p class="text-yellow">${annuncio.price}</p>
            `;
        //18.
        cardWrapper.appendChild(div);
      });
    }
    //19.
    // showCards();
    //32.
    showCards(data);

    //24.

    // function filterByCategory(categoria) {
    //65.
    let radioButtons = document.querySelectorAll(".form-check-input");

    //63 b-1.
    function filterByCategory(array) {
      //66.
      //passaggio1. let arrayFromNodeList = Array.from(radioButtons);
      //passaggio2. let button = arrayFromNodeList.find( (bottone)=> bottone.checked );
      //passaggio3. let categoria = button.id;
      //sotto, facciamo gli stessi passaggi, ma concatenati
      let categoria = Array.from(radioButtons).find(
        (button) => button.checked
      ).id;
      //25.

      //34.
      if (categoria != "All") {
        //63 b-1.
        let filtered = array.filter(
          (annuncio) => annuncio.category == categoria
        );
        // //29. lancio la funzione showCards() sull'array che è stato filtrato in base alla categoria
        // showCards(filtered);
        //63b.
        return filtered;
      } else {
        //63b. -//-
        // showCards(data);
        return array;
      }
    }

    //26.
    //27.
    //65.
    // let radioButtons = document.querySelectorAll(".form-check-input");

    //28.

    radioButtons.forEach((button) => {
      button.addEventListener("click", () => {
        //63 b-2.
        // filterByCategory(button.id);
        //63b.
        //67. lancio la funzione filterByCategory()
        // filterByCategory();
        //76.lancio globalFilter() al posto di filterByCategory();
        globalFilter();
      });
    });
    //43.
    let priceInput = document.querySelector("#priceInput");
    //47.
    let priceValue = document.querySelector("#priceValue");

    //37.
    function setPriceInput() {
      //38.
      let prices = data.map((annuncio) => +annuncio.price);
      //40.
      prices.sort((a, b) => a - b);
      //41.
      let maxPrice = Math.ceil(prices.pop());
      //44.
      priceInput.max = maxPrice;
      //45.
      priceInput.value = maxPrice;
      //48.
      priceValue.innerHTML = maxPrice;
    }
    //39. invoco la funzione setPriceInput()
    setPriceInput();

    //49.
    //70.
    function filterByPrice(array) {
      //50.
      //71.
      let filtered = array.filter(
        (annuncio) => +annuncio.price <= priceInput.value
      );
      //51.
      // showCards(filtered);
      //63b. -//-
      return filtered;
    }
    //52.
    priceInput.addEventListener("input", () => {
      //53.
      priceValue.innerHTML = priceInput.value;
      // filterByPrice();
      //76. lancio globalFilter() al posto di filterByPrice();
      globalFilter();
    });

    //54.
    //56.
    let wordInput = document.querySelector("#wordInput");
    //57.
    //73.
    function filterByWord(array) {
      //58.
      //74b let filtered = data.filter((annuncio) =>annuncio.name.toLowerCase().includes(parola.toLowerCase()) DIVENTA
      let filtered = array.filter((annuncio) =>
        annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase())
      );
      //59.
      //63b. -//-
      // showCards(filtered);
      return filtered;
    }
    //60.
    //74a. ora wordInput.value lo faccio su includes
    // wordInput.addEventListener("input", () => {
    //   filterByWord(wordInput.value);
    // });
    //76. vado a lanciare globalFilter() su wordInput
    wordInput.addEventListener("input", () => {
      globalFilter();
    });

    //61.
    function globalFilter() {
      //62.
      //63a.
      //63b.
      //68.
      let filteredByCategory = filterByCategory(data); //=>array filtrato per categoria
      //69.
      let filteredByPrice = filterByPrice(filteredByCategory); //=> array filtrato sia per categoria che per prezzo
      //72.
      let filteredByWord = filterByWord(filteredByPrice); // array filtrato per categoria, prezzo e pure parola

      //75.
      showCards(filteredByWord);
    }
  });

//64.

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
