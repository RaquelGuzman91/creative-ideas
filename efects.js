/* variable para acceder  las secciones con la clase "hidden"  */

const seccionesOcultas = document.querySelectorAll('.show');

//** observer */

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('mostrar', entry.
        isIntersecting);
    })
})

seccionesOcultas.forEach((seccion)=>observer.observe(seccion));    
