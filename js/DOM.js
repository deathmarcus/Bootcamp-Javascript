//! DOM Document Object Model
//Esta formado por nodos

// ! Seleccionar elementos
// ? Seleccion por id
// let test = document.getElementById('titulo');

// ? Seleccion por tag -> Multiples coincidencias
// let test = document.getElementsByTagName('h1');

// ? Seleccion por clase -> Multiples coincidencias
// let test = document.getElementsByClassName('claseTest');

// ! Seleccion por query id, clase y tag -> Unica coincidencia

// ? Seleccion por clase
// let test = document.querySelector('.claseTest');

// ? Seleccion por id 
// let test = document.querySelector('#titulo');

// ? Selecion por tag 
// let test = document.querySelector('h1');

// ! Seleccionar multiples coincidencias por query
// let test2 = document.querySelectorAll('h1');

// *-----------------------------------

// ? 1 Seleccionar el elemento
// let parrafo = document.getElementById('parrafo');
// console.log(titulo);

// // ? Setear atributo
// // setAttribute(<nombre atributo>,<valor>)
// parrafo.setAttribute('hidden', true);

// // ? Obtener atributos
// // getAttribute(<nombre atributo>)
// console.log(parrafo.getAttribute('id'));

// // ? Comprobar la existencia de atributos
// // hasAtrribute(<nombre atributo>)
// console.log(parrafo.hasAttribute('hidden'))

// // ? Eliminar atributos
// // removeAttribute(<nombre del atributo>)
// parrafo.removeAttribute('hidden')

// ! Crear elementos en el DOM
// createElement(<elemento html a crear>)

// let list = document.createElement('ul');

// ! Insertar elemento a otro elemento
//ElementoObjetivo.appendChild(<elemento a agregar>)
// let body = document.querySelector('body');

// body.appendChild(list);

// ! Agregar texto
// let item = document.createElement('li')
// item.textContent = 'Esto es texto';
// list.appendChild(item);
// console.log(list);

//*----------------------

// ! Demo insertar multiples items

// let list = document.createElement('ul');
// let body = document.querySelector('body');
// body.appendChild(list);

// for (let i = 0; i <= 30; i++){
//     let item = document.createElement('li');
//     item.textContent = `item # ${i}`;
//     list.appendChild(item);
// }

// ! Insertar elemento antes que otro
// insertBefore(<elemento a insertar><referencia>)

// let parent = document.querySelector('.parent')
// let reference = document.querySelector('.reference')
// let item = document.createElement('p')
// item.textContent = 'algoo'

// parent.insertBefore(item, reference)
// console.log(parent)


/**
* ? Practica
* 1. Agregar en nuestro index.html
*  1.1. Un elemento lista <ul></ul> o <ol></ol>
*  1.2 Agregar varios list items dentro de nuestra lista <li></li> con la clase "item"
* 2. Usando Javascript realizamos lo siguiente
*  2.1. A nuestro elemento list debemos agregarle la clase 'lista' y el id 'lista'
*  2.2. A todos los elementos de la lista debemos retirarle la clase "item"
*  2.3. A todos los elementos de la lista debemos agregar la clase  'list__item'
*/

// let lista = document.getElementsByClassName('item');
// console.log(lista);
// for (let i = 0; i < lista.length; i++) {
//     lista[i].classList.add('lista');
//     lista[i].setAttribute('id', 'lista');
// };
// for (let i = 0; i < lista.length; i++) {
//     lista[i].removeAttribute('class', 'item');
// };

// ? Ejercicio 1 - Repicar este markup (HTML) usando JS

// <ul id="menu" class="menu">
//        <li class="item__menu">Home</li>
//        <li class="item__menu">Products</li>
//        <li class="item__menu">About Us</li>
//    </ul>

// let list = document.createElement('ul');
// let body = document.querySelector('body');
// body.appendChild(list);
// list.setAttribute("class", "menu");
// list.setAttribute("id", "menu");

// for (let i = 0; i < 3; i++) {
//     let item = document.createElement('li');
//     if (i === 0) {
//         item.textContent = `Home`;
//         list.appendChild(item);
//         item.setAttribute("class", "item_menu");
//     } else if (i === 1) {
//         item.textContent = `Products`;
//         list.appendChild(item);
//         item.setAttribute("class", "item_menu");
//     } else {
//         item.textContent = `About Us`;
//         list.appendChild(item);
//         item.setAttribute("class", "item_menu");
//     }
// }

// ? Tarea
// Dado un arreglo de koders
// 1. Generar una lista con la clase "koders"
// 2. Agregar a cada koder en esa lista
// 3. A todos los koders agregarles la clase "item koder"
let koders =  [
   {
       name: 'Ferdinand',
       lastName: 'Bracho',
       age: 30,
       generation: 2,
       modulos: ['js','python', 'git'],
   },
   {
       name: 'Alfredo',
       lastName: 'Pi',
       age: 20,
       generation: 10,
       modulos: ['Node', 'Cloud'],
   },
   {
       name: 'Ale',
       lastName: 'Pa',
       age: 30,
       generation: 1,
       modulos: ['React'],
   }
]

let lista = document.createElement('ul');
let body = document.querySelector('body');
lista.setAttribute("class", "koders")

body.appendChild(lista);

const asigna = (arr) =>{
koders.forEach((koder) => {
    let item = document.createElement('li');
    console.log(koder.name, koder.lastName, koder.age, koder.generation, koder.modulos);
    item.textContent = `Nombre: ${koder.name} Apellido: ${koder.lastName} Edad: ${koder.age}  Generacion: ${koder.generation} Modulo: ${koder.modulos}`;
    lista.appendChild(item);
    item.classList.add('item_koder');
} );

return;
}
asigna(koders);