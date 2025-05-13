export function productDetailComponent(product){
    let $containerProduct = document.querySelector('.containerProduct')

    let{ title, description, rating: {rate,count}, category, image} = product
    let component = `
        <section class="containerDetailProduct">
            <div class="product-images">
                <div class="product-gallery">
                    <img class="product-gallery-img" src="${image}" alt="${title}">
                    <img class="product-gallery-img" src="${image}" alt="${title}">
                    <img class="product-gallery-img" src="${image}" alt="${title}">
                </div>
                <div> <img class="image-central" src="${image}"alt=""></div>
            </div>
            <div class="product-data">
                <h3 class="product-title">${title}</h3>
                <div class="d-flex category">Category: <a class="" href="#">${category}</a></div>
                <p class="subtitle">Descripción:</p>
                <p class="description">${description}</p>
                <p class="subtitle">Colores:</p>
                <div class="colors">
                    <div class="cube cube-red"></div>
                    <div class="cube cube-green"></div>
                    <div class="cube cube-blue"></div>
                    <div class="cube cube-orange"></div>
                </div>
                <p class="price">S/ 109.95</p>
                <div class="d-flex g-1">
                    <p class="amount"> Cantidad: ${count} </p>
                    <p class="rate">Valoración: ${rate}</p>
                </div>
                <div class="btn btn-blue">Comprar ahora</div>
            </div>
        </section>
    `
    $containerProduct.insertAdjacentHTML('beforeend',component)
}