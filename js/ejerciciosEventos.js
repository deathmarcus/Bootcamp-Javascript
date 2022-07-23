let displayCard = document.querySelector('.display-card');
let trigger = document.querySelector('.card-exercise');

displayCard.addEventListener ('click',() => {
    trigger.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="../assets/R.jfif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Ejemplo de tarjeta</h5>
    <p class="card-text">Ejercicio de crear tarjeta de forma dinámica</p>
    <a href="#" class="btn btn-primary cierraTarjeta">Cerrar</a>
  </div>
</div>
`;

let cierraTarjeta = document.querySelector('.cierraTarjeta');
cierraTarjeta.addEventListener('click',() => {
    trigger.innerHTML = '';
});
    
});


let inputT = document.getElementById('texto').addEventListener("input", mostrarTexto);

let textoTemp = document.getElementsByClassName('text-div');

function mostrarTexto() {
    textoTemp.innerHTML = inputT.target.value;

}

