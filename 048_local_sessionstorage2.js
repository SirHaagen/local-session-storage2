
let es= document.querySelector(".es");
let en= document.querySelector(".en");
let modal= document.querySelector(".contenedor");

function mostrarModal(){

es.addEventListener("click", ()=>{
  localStorage.setItem("idioma", "es");
  ocultarModal();
});

en.addEventListener("click", ()=>{
  localStorage.setItem("idioma", "en");
  ocultarModal();
});

}

function ocultarModal(){
  modal.style.animation= "desaparecer 1s linear";
  setTimeout(()=>modal.style.display= "none",1000);
}

if(localStorage.getItem("idioma")=== null) mostrarModal();
else{
  console.log(`El idioma previamente seleccionado es: ${localStorage.getItem("idioma")== "en" ? "inglés" : "español"}`);
  modal.style.display= "none";
}