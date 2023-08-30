import { enchants } from "../../data/encantamientos.js";
import {filtrosActivos, filtrosActivosCalidad } from "../../data/enchants-filtrados.js";



// ------- FUNCIONAS USADAS EN EL ALGORITMO DE ENSEÑAR EL ENCANTAMIENTO SELECCIONADO ---------------------------------------------------------------------
export function buscarEnchant(enchantId) { // Devuelve todos los datos de un ecnantamiento específico
  
  let enchantSeleccionado;

  enchants.forEach((enchant) => {
    if (enchant.enchantId === enchantId) {
      enchantSeleccionado = enchant;
    }
  })

  return enchantSeleccionado;
}


export function linkIconos(textoIcons) { // Loop que crea las imágenes para el layout derecho (al seleccionar un encantamiento)
  let iconsHTML = ''
  textoIcons.forEach((textoIcon) => {
    iconsHTML += `<img class="enchant-seleccionado-seAplica-image" src="images/minecraft-icons/${textoIcon}.png">`
  })
  return iconsHTML;
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------



// ------- FUNCIONAS USADAS PARA LA CREACIÓN DE CÓDIGO HTML EN EL APARTADO DE FILTROS (LAYOUT IZQUIERDO)-----------------------------------------------------

export function codigoFiltro() { // Código HTML generado para el apartado visual de los filtros (en este caso para la aplicabilidad)
  let filtroCodigo = ''

  const listaFiltros = [
    "casco",
    "espada",
    "pechera",
    "hacha",
    "pantalones",
    "pico",
    "botas",
    "pala",
    "elytras",
    "azada",
    "tridente",
    "arco",
    "caña",
    "ballesta"
  ]

  listaFiltros.forEach((filtroNombre) => {
    
    filtroCodigo += `
    <div class="filtro-icon-container">
      <label for="check-${filtroNombre}" class="filtro-label">
        <img src="images/minecraft-icons/${filtroNombre}.png" class="filtro-icon-image">
      </label>
      <input type="checkbox" id="check-${filtroNombre}" class="filtro-checkbox" data-filtro-nombre=${filtroNombre}>
    </div>
    `
  })

  document.querySelector('.js-filtros-icons-grid').innerHTML = filtroCodigo
}


export function codigoFiltroCalidad() { // Código HTML generado para el apartado visual de los filtros (en este caso para la calidad)
  let filtroCodigo = ''

  const listaFiltros = [
    "S",
    "C",
    "A",
    "D",
    "B",
    "F",
  ]

  const traduccionFiltro = [
    "Fabled",
    "Elite",
    "Legendary",
    "Unique",
    "Ultimate",
    "Simple",
  ]

  listaFiltros.forEach((filtroNombre, index) => {

    filtroCodigo += `
    <div class="filtro-icon-container filtro-icon-container-calidad">
      <label for="check-${filtroNombre}" class="filtro-label">
        <p class="filtro-calidad filtro-calidad-${filtroNombre}">${filtroNombre}</p>
      </label>
      <input type="checkbox" id="check-${filtroNombre}" class="filtro-checkbox" data-filtro-nombre=${traduccionFiltro[index]} data-filtro-tipo="calidad">
    </div>
    `
  })

  document.querySelector('.js-filtros-icons-grid_2').innerHTML = filtroCodigo
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------





// ------- FUNCIONAS USADAS EN EL ALGORITMO DE FILTROS ----------------------------------------------------------------------------------------------------

var enchantsFiltradosNuevos = []  // Lista de encantamientos filtrados por aplicabilidad

export function filtrarEnchantsAplicar(filtro, checked) { //Filtra los encantamientos por aplicabilidad (ej: casco, espada, etc) -----------------------
  
  if (checked == 'activado') { // Si el checkbox ha sido activado se añade a los filtros activos
    filtrosActivos.push(filtro)
  } else if (checked == 'desactivado') { // Si ha sido desactivado se elimina de los filtros activos
    
    const index = filtrosActivos.indexOf(filtro);
    filtrosActivos.splice(index, 1)
  }
  
  enchantsFiltradosNuevos = []
  filtrosActivos.forEach((filtroActivo) => { // Loop por los filtros activos, por cada ciclo se añade el id de los enchants que coincidan
    enchantsFiltradosNuevos = enchantsFiltradosNuevos.concat((enchants.filter(enchant => enchant.seAplica.indexOf(filtroActivo) != -1)).map(id => id.enchantId))
  })

  enchantsFiltradosNuevos = borrarDuplicados(enchantsFiltradosNuevos) // Borrar ids duplicados
  

  return añadirFiltradosGeneral()
}



export function filtrarEnchantsCalidadCheck(filtro, checked) { //Filtra los encantamientos por calidad (ej: simple, fabled, etc) ----------------------------
  
  if (checked == 'activado') { // Si ha sido activado
    filtrosActivosCalidad.push(filtro)
  } else { // Si ha sido desactivado
    const index = filtrosActivosCalidad.indexOf(filtro);
    filtrosActivosCalidad.splice(index, 1)
  }

  return filtrarEnchantsCalidad()
}


var enchantsFiltradosCalidad = [] // Lista de encantamientos filtrados por calidad

function filtrarEnchantsCalidad() { // Función que filtra los encantamientos por calidad


  enchantsFiltradosCalidad = []
  
  let enchantsIds = []

  enchants.forEach((enchant) => {
    enchantsIds.push(enchant.enchantId)
  })

  enchantsIds.forEach((filtradoId) => { // Loop por todos los ids filtrados, por cada loop mira de qué calidad es
    const enchantCalidad = enchants.filter(enchant => enchant.enchantId===filtradoId).map(enchant=> enchant.calidad)

    if (filtrosActivosCalidad.indexOf(enchantCalidad[0]) != -1) { // Si la calidad obtenida está en la lista de filtros activos por calidad
      
      enchantsFiltradosCalidad.push(filtradoId)
    }
  })
  
  enchantsFiltradosCalidad = borrarDuplicados(enchantsFiltradosCalidad)
  

  return añadirFiltradosGeneral()
}


var enchantsFiltradosNombre = []

export function filtrarEnchantsNombre(texto) { //Filtra los encantamientos por nombre ----------------------------------------------------------------------


  enchantsFiltradosNombre = [] // Lista de enchants filtrados por nombre


  let enchantsIds = []

  enchants.forEach((enchant) => {
    enchantsIds.push(enchant.enchantId)
  })


  enchantsIds.forEach((filtradoId) => { // Loop por todos los ids filtrados, por cada loop mira qué nombre tiene
    const nombreEnchantFiltrado = String((enchants.filter(enchant => enchant.enchantId===filtradoId)).map(enchant => enchant.nombre)).toLowerCase()
    
    let matchingTexto = ''
    
    for (let i=0; i < String(texto).length; i++) { // Loop for i para ver las primeras letras del enchant 
      matchingTexto += nombreEnchantFiltrado[i]    // (el num de letras es igual al número de carácteres en el input)
    }


    if (matchingTexto===texto.toLowerCase()) { // Si las primeras letras del enchant coinciden con el input, se añade a la lista de filtrados por nombre
      enchantsFiltradosNombre.push(filtradoId)
    }
  })

  
  return añadirFiltradosGeneral()
}




// ------- FUNCIONAS MENORES (Funciones de utilidad) ------------------------------------------------------------------------------------------------------


function borrarDuplicados(arr) { // Elimina los ítems duplicados de una lista
  return arr.filter((item,
    index) => arr.indexOf(item) === index);
}

function devolverDuplicados(arr) { // Devuelve los ítems duplicados de una lista
  return arr.filter((currentValue, currentIndex) =>
  arr.indexOf(currentValue) !== currentIndex);
}


var enchantsFiltradosGeneral = [];

function añadirFiltradosGeneral() { // Devuelve los ids de los encantamientos que coincidan entre los filtros activos 
  enchantsFiltradosGeneral = [];

  let enchantsFiltradosFinal = []
  let numFiltrosActivos = 0;

  if (filtrosActivosCalidad != '') {
    enchantsFiltradosGeneral = enchantsFiltradosGeneral.concat(enchantsFiltradosCalidad)
    numFiltrosActivos += 1
  }
  if (document.querySelector('.js-search-bar').value != '') {
    enchantsFiltradosGeneral = enchantsFiltradosGeneral.concat(enchantsFiltradosNombre)
    numFiltrosActivos += 1
  } 
  if (filtrosActivos != '') {
    enchantsFiltradosGeneral = enchantsFiltradosGeneral.concat(enchantsFiltradosNuevos)
    numFiltrosActivos += 1
  }
  
  
  if (numFiltrosActivos == 2) {
    enchantsFiltradosFinal = devolverDuplicados(enchantsFiltradosGeneral)
  }
  else if (numFiltrosActivos == 3) {
    enchantsFiltradosFinal = devolverDuplicados(devolverDuplicados(enchantsFiltradosGeneral))
  } else{
    return enchantsFiltradosGeneral
  }

  return enchantsFiltradosFinal
}


export function verificarFiltrados() {
  if (filtrosActivos != '' || filtrarEnchantsCalidad != '' ||
  document.querySelector('.js-search-bar').value != '') {
    return añadirFiltradosGeneral()
  } 
}