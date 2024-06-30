// Array de ejemplo de objetos que representan personas
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Ana', edad: 35 }
];

// Usar map para crear un nuevo array con los nombres en mayúsculas
const nombresEnMayusculas = personas.map(persona => persona.nombre.toUpperCase());

// Imprimir el resultado
console.log(nombresEnMayusculas);
// Usar filter para obtener solo las personas con edades menores a 30
const personasMenoresDe30 = personas.filter(persona => persona.edad < 30);
// Usar map para extraer las edades de estas personas
const edadesMenoresDe30 = personasMenoresDe30.map(persona => persona.edad);
// Imprimir el resultado
console.log(edadesMenoresDe30);






const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
console.log(numerosImpares);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
const nombresFins=names.filter(name=>name.endsWith('s'))

const contenedorPrincipal = document.getElementById('principal');

names.forEach(nom=>{
    const n=document.createElement('ul');
    n.textContent=nom;
    contenedorPrincipal.appendChild(n);
})

        // Crear y agregar los elementos al contenedor
        nombresFins.forEach(nombre => {
            // Crear un nuevo elemento <p>
            const p = document.createElement('p');
            // Establecer el texto del párrafo
            p.textContent = nombre;
            // Agregar el párrafo al contenedor principal
            contenedorPrincipal.appendChild(p);
        })
        const urlsImagenes = [
            'https://picsum.photos/id/36/400/400',
            'https://picsum.photos/id/37/400/400',
            'https://picsum.photos/id/38/400/400',
            'https://picsum.photos/id/39/400/400',
            'https://picsum.photos/id/40/400/400'
        ];
        
        // Crear un DocumentFragment
        const fragmento = document.createDocumentFragment();
        console.log(document)
        
        // Crear y agregar los elementos al fragmento
        urlsImagenes.forEach(url => {
            // Crear un nuevo elemento <figure>
            const figure = document.createElement('figure');
        
            // Crear un nuevo elemento <img> con src y alt
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Descripción de la imagen';
        
            // Agregar la imagen al figure
            figure.appendChild(img);
        
            // Agregar el figure al fragmento
            fragmento.appendChild(figure);
        });
        
        // Obtener el contenedor principal
        
        
        // Agregar el fragmento al contenedor principal
        contenedorPrincipal.appendChild(fragmento);