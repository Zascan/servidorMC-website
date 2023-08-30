import {enchants} from "../data/encantamientos.js";
import { buscarEnchant, linkIconos, codigoFiltro, filtrarEnchantsAplicar, 
filtrarEnchantsNombre, codigoFiltroCalidad, filtrarEnchantsCalidadCheck, verificarFiltrados } from "./utils/main-funciones.js";
import { filtrosActivosCalidad } from "../data/enchants-filtrados.js";

//--- ATRIBUTOS PARA LA ANIMACIÓN AL SCROLLEAR ---
AOS.init({
  duration: 250,
  once:false,
  offset:70,
  mirror: true,
  easing:'ease',
  delay:100 ,
});
//--- CÓDIGOS HTML PARA LOS FILTROS ---
codigoFiltro()

codigoFiltroCalidad()
// ---------------------





let enchantsContainerHTML = '';

let visualizadoContainer = '';
let visualizadoGeneral = 'normal'

window.onload = mostrarTodosEnchants(visualizadoGeneral)

function mostrarTodosEnchants(visualizado) {
  
  enchantsContainerHTML = ''

  if (visualizado === 'normal') {
    visualizadoContainer = '<img src="images/gifs/Enchanted_Book.gif" class="enchant-imagen">'
    visualizadoGeneral = 'normal'
  }

  enchants.forEach((enchant) => { 
    
    mirarVisualizado(visualizado, enchant)
    
    enchantsContainerHTML += `
      <div class="enchant-grid-container js-enchant-grid-container" data-aos="zoom-in" data-enchant-id=${enchant.enchantId}>
        <div class="enchant-imagen-container">
          ${visualizadoContainer}
        </div>
        
        <div class="enchant-info-container ${enchant.calidad}">
          <div class="enchant-nombre-container js-enchant-nombre-container-${enchant.enchantId}">
            <p class="enchant-nombre">${enchant.nombre}</p>
          </div>
          
          <div class="enchant-calidad-container">
            <p class="enchant-calidad">${enchant.calidad}</p>
          </div>
        </div>
      </div>
      `;
  });
  
  document.querySelector('.js-enchants-grid-container').innerHTML = enchantsContainerHTML  
}



document.querySelector('.js-select-visualizado')
.addEventListener('change', (event) => {
  mostrarTodosEnchants(event.target.value)
  procesoFiltro(verificarFiltrados())
})



// ------------------------ FILTRAR SOLO LOS ENCANTAMIENTOS ESPECÍFICOS -------------------------------------------------------

document.querySelectorAll('.filtro-checkbox')   //Filtro por aplicabilidad (ej: casco, espada, etc)
  .forEach((filtro) => {
    filtro.addEventListener('change', (event) => {
      let checked
      if (event.currentTarget.checked) {
        checked = 'activado'
      } else {
        checked = 'desactivado'
      }

      if (filtro.dataset.filtroTipo) {
        procesoFiltro(filtrarEnchantsCalidadCheck(filtro.dataset.filtroNombre, checked))
      } else {
        procesoFiltro(filtrarEnchantsAplicar(filtro.dataset.filtroNombre, checked))
      }  
    })
  })

document.querySelector('.js-search-bar') //Filtro por nombre
  .addEventListener('input', (event) => {
    procesoFiltro(filtrarEnchantsNombre(event.target.value))
  })



function procesoFiltro(filtrados) { //Función que enseña en pantalla los enchants filtrados

  enchantsContainerHTML = ''

  filtrados.forEach((filtrado) => {
    let enchantFiltrado = enchants[enchants.findIndex(enchant => enchant.enchantId === filtrado)]

    mirarVisualizado(visualizadoGeneral, enchantFiltrado)

    enchantsContainerHTML += `
    <div class="enchant-grid-container js-enchant-grid-container" data-aos="zoom-in" data-enchant-id=${enchantFiltrado.enchantId}>
      <div class="enchant-imagen-container">
        ${visualizadoContainer}
      </div>
      
      <div class="enchant-info-container ${enchantFiltrado.calidad}">
        <div class="enchant-nombre-container js-enchant-nombre-container-${enchantFiltrado.enchantId}">
          <p class="enchant-nombre">${enchantFiltrado.nombre}</p>
        </div>
        
        <div class="enchant-calidad-container">
          <p class="enchant-calidad">${enchantFiltrado.calidad}</p>
        </div>
      </div>
    </div>
    `;
  })

  if (enchantsContainerHTML === '' && 
  document.querySelector('.js-search-bar').value == '' &&
  filtrosActivosCalidad == '') {
    mostrarTodosEnchants(visualizadoGeneral)
  } else if ((enchantsContainerHTML != '' ||
  document.querySelector('.js-search-bar').value != '' ||
  filtrosActivosCalidad != '') && enchantsContainerHTML=='') {
    document.querySelector('.js-enchants-grid-container').innerHTML = 
    '<p class="noEncontrado" data-aos="zoom-in">¡No se encontró ningún encantamiento!</p>'
  } else {
    document.querySelector('.js-enchants-grid-container').innerHTML = enchantsContainerHTML
  }


  clickarEnchant()

}
// ----------------------------------------------------------------------------------------------------------------------------





// ------------------------ MOSTRAR TODA LA INFO DEL ENCANTAMIENTO SELECCIONADO -------------------------------------------------------

clickarEnchant()

function clickarEnchant() {
  document.querySelectorAll('.js-enchant-grid-container')
  .forEach((bloque) => {
    bloque.addEventListener ('click', () => {
      const enchantSeleccionadoId = bloque.dataset.enchantId;

      const enchantSeleccionado = buscarEnchant(enchantSeleccionadoId);
      mostrarEnchant(enchantSeleccionado);
    })
  })
}



  
function mostrarEnchant(enchant) {
  
  const iconsHTML = linkIconos(enchant.seAplica)
  
  const html = `
  <div class="animation-container enchant-seleccionado-container">
    <div class="enchant-seleccionado-nombreCalidad-container">
      <div class="enchant-seleccionado-nombre">
        <span class="span-nombre">${enchant.nombre}</span>
        <div class="fader fader-left"></div>
        <div class="fader fader-right"></div>
      </div>
      <p class="enchant-seleccionado-calidad enchant-seleccionado-calidad-${enchant.calidad}">${enchant.calidad}</p>
    </div> 
   
    <div class="enchant-seleccionado-info enchant-seleccionado-info-${enchant.calidad}">
      <p class="enchant-seleccionado-lvlmax">Máximo nivel: ${enchant.maxLevel}</p>
      <p class="enchant-seleccionado-probabilidad">${enchant.probabilidad}% de éxito</p>
      <p class="enchant-seleccionado-cooldown">${enchant.cooldown}s de cooldown</p>
      <div class="enchant-seleccionado-habilidad-container">
        <p class="enchant-seleccionado-habilidad">
          ${enchant.info}
        </p>
      </div>  
      <div class="enchant-seleccionado-seAplica-container">
        ${iconsHTML}
      </div>
    </div>  
    
    <div class="tooltip-container">
      <img src="images/svgs/info.svg" class="svg-info">
      <div class="info-tooltip">
        <p>
          <strong>% de éxito:</strong> Probabilidad de que la habilidad del encantamiento surja efecto.<br>
          <strong>Cooldown:</strong> Segundos de espera para poder activar otra vez la habilidad.
        </p>
      </div>     
    </div>
  </div>
    `

    if (html === document.querySelector('.js-enchant-seleccionado-container')
    .innerHTML) {
      document.querySelector('.js-enchant-seleccionado-container')
      .innerHTML = '';
      return;
    }

    document.querySelector('.js-enchant-seleccionado-container')
    .innerHTML = html
    
    document.querySelector('.span-nombre').
      addEventListener('mouseover', () => compararMedidas('animar'))

    document.querySelector('.span-nombre').
      addEventListener('mouseout', () => compararMedidas())
}
// ----------------------------------------------------------------------------------------------------------------------------

// ------------------------FUNCIONES DE UTILIDAD----------------------------------------------------------------------------

function mirarVisualizado(visualizado, enchant) {
  if (visualizado === 'nivel') {
    visualizadoContainer = `<p class="enchant-imagen-level">${enchant.maxLevel}</p>`;
    visualizadoGeneral = 'nivel'
  } else if (visualizado === 'aplicar') {
    if (enchant.seAplica.length === 4 && enchant.seAplica[0] === 'casco'){
      visualizadoContainer = `
      <img class="enchant-imagen enchant-imagen-armor" src="images/minecraft-icons/armor.png">`;
    } 
    else if (enchant.seAplica.length != 1) {
      visualizadoContainer = `
      <img class="enchant-imagen" src="images/minecraft-icons/${enchant.seAplica[0]}.png">
      <div class="numAplicar">+${enchant.seAplica.length-1}</div>
      `
    }
    else {
      visualizadoContainer = `
      <img class="enchant-imagen" src="images/minecraft-icons/${enchant.seAplica[0]}.png">`;
    }

    visualizadoGeneral = 'aplicar'
  }
}



function compararMedidas(evento) {
  // -Animación cuando el texto excede el límite

let container2 = document.querySelector(".enchant-seleccionado-nombre");
let text2 = document.querySelector(".span-nombre");

if (container2.clientWidth < text2.clientWidth) {
  if (evento=='animar') {
    text2.classList.add("animate");
  } else {
    text2.classList.remove("animate");
  }
}
}