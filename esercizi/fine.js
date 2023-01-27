const awaitElements = async function () {
  try {
    let response = await fetch("./books.json");

    if (response.ok) {
      let data = await response.json();
      console.log("data", data);
      let contenitorecard = document.getElementById("contenitore-card");
      data.forEach((book) => {
        //creazione card con js
        contenitorecard.innerHTML = contenitorecard.innerHTML += `
            <div class="card mt-5 bg-warning m-1 " style="width: 18rem; height:40rem">
    <img class="card-img-top mt-3 img-fluid w-100" style="height:420px" src=${book.img} alt="Card image cap">
    <div class="card-body d-flex flex-column align-items-center justify-content-between  ">
      <h5 class="card-title">${book.title} </h5>
      <p class="card-text">${book.asin} </p>
      <a id="skip" href="#" class="btn btn-dark">Skip Book</a>
    </div>
  </div>
            `;
      });
    } else {
      console.log("Somenthingh went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
};

awaitElements();
