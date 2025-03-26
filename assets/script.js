const $divTaula = document.querySelector(".taula"),
  d = document,
  $form = d.querySelector("form");
(async () => {
  try {
    let res = await fetch(
      "https://my-json-server.typicode.com/ismaelFiguera1/My_JSON-SERVER_API/productes"
    );
    let resJSON = await res.json();
    console.log(resJSON);
    let $taula = d.createElement("table");
    let $tr = d.createElement("tr");
    let $encabezat = `            <th>ID</th>
                <th>NOM</th>
                <th>PREU</th>`;
    $tr.innerHTML = $encabezat;
    $taula.insertAdjacentElement("afterbegin", $tr);
    $fragment = d.createDocumentFragment();
    resJSON.forEach((element) => {
      let $tr1 = d.createElement("tr");
      let linea = `                <td>${element.id}</td>
                <td>${element.nom}</td>
                <td>${element.preu}</td>
                <td><button data-id="${element.id}" data-nom="${element.nom}" data-preu="${element.preu}" class="edit">Editar</button></td>
                <td><button data-id="${element.id}" class="delete">Borrar</button></td>`;
      $tr1.innerHTML = linea;
      $fragment.appendChild($tr1);
    });
    $taula.appendChild($fragment);
    $divTaula.insertAdjacentElement("afterbegin", $taula);
  } catch (error) {
    console.log(error);
  }
})();

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $form.ide.value = e.target.dataset.id;
    $form.nom.value = e.target.dataset.nom;
    $form.preu.value = e.target.dataset.preu;
  } else if (e.target.matches(".delete")) {
    
  }
});

d.addEventListener("submit", () => {});
