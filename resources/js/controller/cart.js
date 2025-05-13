import { findProducts } from "../apis/products.js";
import { toastAnimationProcessPurchase } from "../animations/cart.js";
import { productCartComponent } from "../components/productCartComponent.js";

let $containerCart_products = document.querySelector('.containerCart-products')
let process = document.querySelector('.procesar')
let cart = []
async function addProduct(id_){
    
    let product = await findProducts(id_);
    if(product.length < 1){
        console.log("no se encontro producto")
        return
    }

    let{id,title,price} = product
    
    let exist = existProduct(id)
    if(exist){
        exist.amount++
        totalCart()

    }else{
        cart.push({ id, title, price, amount: 1})
        totalCart()
        let componente = productCartComponent(product)
        $containerCart_products.insertAdjacentHTML("beforeend",componente)
    }
}

function existProduct(id){
    let product = cart.find(item =>item.id === id)
    return product
}

function totalCart(){
    let $subtotal = document.querySelector('.subtotal')
    let $total = document.querySelector('.total')
    let $count_product = document.querySelector('.count-product')
    const total = cart.reduce((acc,item) =>{
        return acc + (item.price * item.amount)
    },0)
    const amount = cart.reduce((acc,item) =>{
        return acc + item.amount
    },0)
    
    if(!$subtotal){
        return
    }
    $subtotal.textContent = `S/ ${total}`
    $total.textContent = `S/ ${total}`
    $count_product.textContent = amount
}

function processPurchase(){
    let debounce = false
    if(!process){
        return
    }
    process.addEventListener('click',()=>{
        if(cart.length > 0){
            localStorage.setItem('cart',JSON.stringify(cart))
            window.location.href= 'checkout.html'
        
        }else{
            console.log("error")
            if(debounce == false){
                debounce = true
                toastAnimationProcessPurchase();
                setTimeout(()=>{
                    debounce = false
                },5000)
            }
        } 
    })
    
}
processPurchase()


export {addProduct};