//5. catturo il div che dovrà contenere i miei radio
//6. creo una funzione che creerà tanti radio quante sono le categorie dell'array in annunci.json
//7. creo un nuovo array "categories" che dovrà contenere solo le categorie dell'array annunci.json
//8a. PRIMO METODO creo un nuovo array uniqueCategories che mi restituisca le varie categorie solo una volta
//8b. SECONDO METODO con Set(): mi restituisce, partendo da un array, un oggetto di tipo Set (array-like), il quale contiene solo valori univoci (che non si ripete)
//  let uniqueCategories= new Set(categories);
//9. una volta creato il Set lo devo trasformare in un vero array con il metodo Array.from()
//10. partendo ora da uniqueCategories ci andiamo a creare tanti radio quante le categorie che contiene
//11.vado a replicare il div con la classe form-check
//12. ora mi vado a mettere tutto dentro al div copiandolo da HTML e sostituendo in modo adeguato l'id e il for
//13. ora devo appendere i radio appena creati al div che gli deve contenere
//15. vado a catturare ora il div contenitore delle mie card
//16. mi creo la funzione che mi creerà poi le varie card
//17. per ogni annuncio (data) mi creo un div con la classe card-custom seguendo il modello creato in annunci.html
//18. appendo ciò che ho appena creato al wrapper
//19. lancio la funzione
//21. creo una funzione che mi aggiusta la lunghezza del nome per farla c'entrare dentro alla card
//22. ora a data.forEach passo anche l'indice 'i'. In questo modo ora mi posso andare a richiamare un'immagine casuale ogni volta diversa (da picsum)
//23. aggiungo l'attributo title così quando ci passo sopra cohn il mouse riesco a vedere il nome intero
//24.Creo ora una funzione che mi filtra le card per oop le varie categorie
//25. In questa funzione ho bisogno di ottenere un nuovo array partendo da data e gli elementi del nuovo array dovranno soddisfare la condizione per la quale la loro category sia uguale alla categoria che stiamo passando alla funzione
//26. ora voglio attccare ai vari radio la funzione scritta sopra
//27. mi vado quindi a catturare tutti i radio
//28. per ogni radio vado quindi ad appendere l'id delle varie categorie lanciando la funzione creata sopra filterByCategory
//30. per far apparire solo le card che fanno parte di una categoria devo, al lancio della function showCards, svuote come prima cosa il wrapper (cardWrapper)
//31. siccome ancora il filtro non funzione come si deve, devo cambiare la mia funzione showCards. Ora quindi le passo un array che prenderà il posto di "data"
//32. ora al caricamente della pagina, la funzione showCards dovrà per prima stamparmi "data" e più in là solo le varie card appartenenti alle categorie che scelgo
//34. dobbiamo creare un if in modo che, se la categoria scelta è diversa da All mi deve far vedere quella categoria, altrimenti mi deve mostrare tutte le card lanciando showCards(data)
//37. ora creo una funzione che a seconda di come muovo il range
//38. Dopo aver catturato l'input voglio settare come proprieta' max dello stesso il valore piu' alto tra i price di ogni prodotto. Per farlo avro' quindi bisogno di un array che contenga solo i prezzi, a quel punto lo ordino in maniera crescente/decrescente e prendermi l'elemento con il valore piu' alto. Aggiungo "+" in modo da rendere le stringhe che contengono il prezzo dei numeri
//40. mi vado ora ad ordinare l'array di numeri in ordine crescente
//41. prendo l'ultimo elemento dell'array e lo metto in una variabile maxPrice e lo arrotondo per eccesso
//43. catturo priceInput
//44. dentro la variabile priceInput, alla sua proprietà max la faccio diventare uguale a maxPrice
//45. per far si che al caricamento della pagina mi mostri tutti gli articoli
//47. catturo priceValue
//48. assengo a priceValue per ora, maxValue al caircamento della pagina
//49.creo finalmente la funzione che filtrerà per prezzo ovvero per il value del mio input
//50.creo un array che conterrà tutti gli annunci minori del valore dell'input che ho scelto tramite il range
//51. lancio la funzione showCards(filtered)
//52. lancio la funzione solo quando scelgo un valore nel range
//53. a priceValue cambio di seguito il valore in base al movimento del range
//54.ordino in ordine crescente il mio array data in base al prezzo
//54. ora creo la funzione che filtra per caratteri
//56. catturo l'input
//57. creo una funzione che mi deve filtrare gli elementi partendo da data in modo tale che nel loro name sia incluso la parola che li stiamo passando. .includes() è il metono che possiamo usare
//58. creo la solita variabile d'appogio e le l'array di dati. usando il metodo filter, per ogni annuncio controllo se nel "name" ci sia l'input "parola" che passo. Per non avere problemi con minuscolo/maiuscolo, uso toLowerCase()/toUpperCase()
//59. qui lancio la funzione che mi fa vedere tutte le card, però siccome la lancio su filtered, mi farà vedere solo quelle che desidero
//60. all'evento 'input', lancio la funzione "filterByWord()" sul valore "value" del input con l'id wordInput
//61. Quello di cui abbiamo bisogno e' che ad ogni evento scattino tutte e tre le funzioni di filtro ma non siano applicate tutte e tre sull'array data, bensi' siano concatenate ed ognuna filtri il risultato della funzione di filtro precedente. Per fare ciò ci creiamo un'unica funzione chiamata globalFilter che invochiamo a ogni evento
//62. Questa funzione deve lanciare le altre 3 funzioni in sequenza
//63a.Mi creo una variabile d'appoggio alla quale assegno la funzione filterByCategory()
//63b. Per fare ciò ho bisogno che ogni funzione, anziché lanciare la funzione su showCards(filtered), mi deve ritornare (return) l'array filtarto
//63 b-1. ora non ho più bisogno che questa funzione lavori sulla categoria bensì su un array
//63 b-1. prima c'era data.filter ma ora ci metto array.filter
//63 b-2. la funzione che segue non la dobbiamo più lanciare qui, ma la lanciamo nella funzione globalFilter() ma per ora non la mettiamo (vai al punto 64.)
//63b. come già detto, ora annullo 67. perché dovrò lanciare più in là la funzione globalFilter()
//63b. quindi come detto sotto, aggiungo il return
//64. ORA DEVIO CATTURARE LA CATEGORIA direttamente dentro la funzione filterByCategory ovvero dobbiamo ottenere il button.id dentro appunto questa funzione. Dirò quindi alla funzione di lasciar perdere il bottone(radio) sul quale ho cliccato e di prendersi la lista dei bottoni e quando trova uno che ha l'attributo "checked", prendi il suo "id" e dammi quindi la categoria
//65. (leggi sotto a 65)
//65. il query selector che sta sotto me lo vado a lanciare all'inizio della funzione filterByCategory()
//66. ora da tutti i bottoni, mi devi prendere la singola categoria.  // La categoria voglio trovarla partendo dalla lista di tutti i bottoni(radio) e usare il metodo .find() degli array su questa lista. La condizione da utilizzare e' il bottone(radio) che possiede l'attributo checked e il suo id
//68. vado quindi inizialmente a lanciare l'array "data" sul primo possibile filtro, ovver su filterByCategory()
//69. vado a laciare il prossimo filtro tramite la funzione filterByPrice che dovrà lavorare sull'array ritornato tramite filterByCategory(data) che si trova ora dentro a filteredByCategory
//70. ora questa funzione filterByPrice deve prendere in ingresso un array e funzionare su quello
//71. prima filtered = data.filter ma ora filtered deve filtrare su l'array che li passo da globalFilter
//72. vado a lanciare l'ultima funzione, ovvero filterByWord che salvo dentro la var filteredByWord. La lancio su filteredByPrice
//73. ora non prende più in ingresso una parola, ma un array
//75. lancio showCards su filteredByWord

//*************************************************************

//poi in CSS ho solo
//2.Modifico a piacimento il modello della mia card in css/
