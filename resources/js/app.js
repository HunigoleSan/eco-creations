import { getProducts, products_list } from './apis/products.js'
import { productCompoent } from './components/productComponent.js';
import { addProduct } from './controller/cart.js';

window.addEventListener('DOMContentLoaded', async () => {
    let containerProduct = document.querySelector('.containerProducts')

    if (!containerProduct) {
        return console.error('No existe contener de productos')
    } else {
        let products = await getProducts();
        products.forEach(pro => {
            let componente = productCompoent(pro);
            containerProduct.insertAdjacentHTML('beforeend', componente)
        });
        
        showCart()
        showProduct()
    }


})

function showCart() {
    let buttonAddCart = document.querySelectorAll('.product-add')
    buttonAddCart.forEach(button => {
        button.addEventListener('click', () => {
            let id = button.id
            let extract_id = id.match(/\d+$/)

            addProduct(extract_id);
        })
    })

}

function showProduct() {
    let $cards = document.querySelectorAll('.card')
    $cards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = `detalle-producto.html?id=${card.id}`
        })
    })
}

