const propiedadesEnAlquiler = [
    { 
        name: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        imgSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        desc: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2000,
        smoke: false,
        pets: true 
    },      
    { 
        name: 'Apartamento luminoso con vista al mar',
        imgSrc: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        desc: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        address: '456 Ocean Avenue, Seaside Town, CA 56789',
        rooms: 3,
        baths: 3,
        price: 2500,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Condominio moderno en zona residencial',
        imgSrc: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        desc: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2200,
        smoke: false,
        pets: false  
    } ,
    { 
        name: 'Piso de lujo en alquiler en Santiago de Chile, Chile',
        imgSrc: 'https://pic.le-cdn.com/thumbs/1024x768/751/1/properties/Property-72c2365dde100aca22b998169df3c066-129245489.jpg',
        desc: 'Muy acogedor y espacioso',
        address: 'Ñuñoa, Santiago',
        rooms: 5,
        baths: 5,
        price: 2000,
        smoke: false,
        pets: false  
    } ,
    { 
        name: 'Vivienda exclusiva en alquiler Quintero, Chile',
        imgSrc: 'https://pic.le-cdn.com/thumbs/1024x768/751/1/properties/Property-b7c0cfcfd4d5475ca199d5d278c8d548-130854561.jpg',
        desc: 'Zona exclusiva de Quintero',
        address: 'Quintero, Santiago, Chile',
        rooms: 7,
        baths: 4,
        price: 3900,
        smoke: true,
        pets: true  
    } ,
    { 
        name: 'Vivienda de alto standing en alquiler Pucón, Chile',
        imgSrc: 'https://pic.le-cdn.com/thumbs/1024x768/751/1/properties/Property-b82ad09bbedd92b490de46af8e755f7a-130057617.jpg',
        desc: 'Todo incluido y listo, exclusivo y acogedor',
        address: 'Pucón, Chile',
        rooms: 4,
        baths: 3,
        price: 390,
        smoke: false,
        pets: true  
    } 
];

function renderizarPropiedadesEnAlquiler() {
    let contenedor;
    let limite;

    if (document.getElementById('propiedadesAlquilerIndex')) {
        contenedor = document.getElementById('propiedadesAlquilerIndex');
        limite = 3;
    } else if (document.getElementById('propiedadesAlquiler')) {
        contenedor = document.getElementById('propiedadesAlquiler');
        limite = propiedadesEnAlquiler.length;
    }

    for (let i = 0; i < limite; i++) {
        const propiedad = propiedadesEnAlquiler[i];

        const divCol = document.createElement('div');
        divCol.className = 'col-md-4 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        divCol.appendChild(cardDiv);

        const img = document.createElement('img');
        img.src = propiedad.imgSrc;
        img.className = 'card-img-top';
        img.alt = propiedad.name;
        cardDiv.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardDiv.appendChild(cardBody);

        cardBody.innerHTML = `
            <h5 class="card-title">${propiedad.name}</h5>
            <p class="card-text">${propiedad.desc}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad.rooms} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.baths} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
        `;

        contenedor.appendChild(divCol);
    }
}
document.addEventListener('DOMContentLoaded', renderizarPropiedadesEnAlquiler);
