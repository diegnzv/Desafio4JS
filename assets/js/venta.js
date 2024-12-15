const propiedadesEnVenta = [
    { 
        name: 'Apartamento de lujo en zona exclusiva',
        imgSrc: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        desc: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        address: '123 Luxury Lane, Prestige Suburb, CA 45678',
        rooms: 4,
        baths: 4,
        price: 5000,
        smoke: false,
        pets: false 
    },      
    { 
        name: 'Apartamento acogedor en la montaña',
        imgSrc: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        desc: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        address: '789 Mountain Road, Summit Peaks, CA 23456',
        rooms: 2,
        baths: 1,
        price: 1200,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Penthouse de lujo con terraza panorámica',
        imgSrc: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        desc: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        address: '567 Skyline Avenue, Skyview City, CA 56789',
        rooms: 3,
        baths: 3,
        price: 4500,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Casa en Puchuncaví, Provincia de Valparaíso',
        imgSrc: 'https://pic.le-cdn.com/thumbs/1024x768/08/1/properties/Property-9e88e02c3b7a8a8e12f3a6f3874380b2-128010859.jpg',
        desc: 'Vista al mar impresionante',
        address: 'Resort Marbella, Valparaiso, CA 389583',
        rooms: 5,
        baths: 8,
        price: 92000,
        smoke: true,
        pets: false  
    } ,
    { 
        name: 'Casa en Las Condes, Santiago de Chile, Región Metropolitana',
        imgSrc: 'https://pic.le-cdn.com/thumbs/1024x768/08/1/properties/Property-48e370c7cacaa95fc6731b153d2f7e22-127952581.jpg',
        desc: 'Tiene una vista a los andes impresionante',
        address: '190 Santiago, CA 342233',
        rooms: 6,
        baths: 10,
        price: 120000,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Casa en Colina, Región Metropolitana',
        imgSrc: 'https://pic.le-cdn.com/thumbs/1024x768/08/1/properties/Property-27d044173d0627d4806ff436c6ff4532-128804907.jpg',
        desc: 'Ofrece paseos en caballo a diario',
        address: '462 Chicureo, Santiago, CA 4345233',
        rooms: 5,
        baths: 0,
        price: 100000,
        smoke: false,
        pets: false  
    } 
];




function renderizarPropiedadesEnVenta() {
    let contenedor;
    let limite;

    if (document.getElementById('propiedadesVentaIndex')) {
        contenedor = document.getElementById('propiedadesVentaIndex');
        limite = 3;
    } else if (document.getElementById('propiedadesVenta')) {
        contenedor = document.getElementById('propiedadesVenta');
        limite = propiedadesEnVenta.length;
    }

    for (let i = 0; i < limite; i++) {
        const propiedad = propiedadesEnVenta[i];

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

document.addEventListener('DOMContentLoaded', renderizarPropiedadesEnVenta);
