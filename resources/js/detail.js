import {findProducts} from './apis/products.js'
import { productDetailComponent } from './components/productDetailComponent.js';
window.addEventListener('DOMContentLoaded',()=>{

    show()
})


function getQueryParam(id){
    const params = new URLSearchParams(window.location.search);
    return params.get(id)
}

function show(){
    const id = getQueryParam('id');
    if (!id){
        return console.error('No se encontro tal parametro')
    }
    let product = findProducts(id)

    product.then(pro =>{
        productDetailComponent(pro)
    })
}