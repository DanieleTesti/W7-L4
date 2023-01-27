// const asyncAwaitExample = async function () {
//   try {
//     // inseriamo la logica di async/await
//     // preponiamo await davanti a ogni metodo che torna una Promise!
//     let res = await fetch("./books.json");
//     // res è utilizzabile!
//     console.log(res);
//     if (res.ok) {
//       let data = await res.json();
//       console.log("data", data);

//       let listReference = document.querySelector("#card-title");

//       data.forEach((book) => {
//         newCard = document.createElement("div");
//         newCard =
//           // appende all'innerHTML precedente un nuovo pezzetto
//           `
//                 <div class="card-title"">
//                     ${book.title}
//                 </div>
//             `;
//       });
//     } else {
//       // finiremo qui se la chiamata ha contattato il server, ma c'è stato
//       // un problema nella risposta!
//       console.log("Qualcosa è andato storto con la nostra chiamata!");
//     }
//   } catch (error) {
//     // finiremo qui se c'è stato un problema a monte, nel contattare il server!
//     // ad es. un errore di rete, modalità aereo, etc.
//     console.log(error);
//   }
// };

// asyncAwaitExample();

// const createABook = async function () {
//   try {
//     let response = fetch("./books.json", {
//       method: "POST",
//       body: JSON.stringify({ title: " " }),
//       headers: {
//         "Content-Type": "application/json", // specifico che il mio body è un oggetto stringhifizzato
//       },
//     });
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createABook();

/////////////////////////////////////////////////////

const createCards = async function () {
  try {
    const res = await fetch("./books.json");
    if (res.ok) {
      const libri = await res.json();
      console.log(libri);
      const contenitoreCard = document.getElementById("contenitore-card");

      libri.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("newBook");

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.height = "100%";

        const img = document.createElement("img");
        img.classList.add("card-img");
        img.style.width = "200px";
        img.style.height = "200px";
        img.setAttribute("src", book.img);

        const cardBody = document.createElement("div");

        const title = document.createElement("h4");
        title.classList.add("card-title");
        title.innerHTML = `
        <h4>
            ${book.title}
        </h4>
    `;
        // book.title;

        const paragraf = document.createElement("p");
        paragraf.classList.add("card-text");
        paragraf.innerText = `Genere: ${book.category}`;

        const price = document.createElement("span");
        price.innerText = ` ${book.price} $`;

        contenitoreCard.appendChild(col);
        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        paragraf.appendChild(price);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

createCards();

// const createABook = async function () {
//   try {
//     let response = fetch("./books.json", {
//       method: "POST",
//       body: JSON.stringify({ title: " " }),
//       headers: {
//         "Content-Type": "application/json", // specifico che il mio body è un oggetto stringhifizzato
//       },
//     });
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
