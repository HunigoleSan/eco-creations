

window.addEventListener('DOMContentLoaded',()=>{
    const $hidden_cart  = document.querySelector('.hidden-cart');
    const $show_cart  = document.querySelector('.show-cart');
    const $cart  = document.querySelector('.cart');
    const $container_cart  = document.querySelector('.containerCart');

    if(!$hidden_cart){
        console.log('Algo fallo en el carrito')
    }else{
        $hidden_cart.addEventListener('click',()=>{
            $cart.classList.remove('show-cart-animation')
            
            setTimeout(()=>{
                fadeBackground($container_cart)
            },300)
        })

        $show_cart.addEventListener('click',()=>{
            showBackground($container_cart)
            setTimeout(()=>{
                $cart.classList.add('show-cart-animation')
            },500)
        })
    }
})

function fadeBackground(element){
    let bg = 0.6

    const interval = setInterval(()=>{
        bg -= 0.1;
        if(bg <= 0){
            
            element.style.visibility = 'hidden'
            clearInterval(interval)
            bg = 0.6;
            return
        }
        element.style.backgroundColor = `rgba(255,255,255,${bg.toFixed(1)})`
    },75)
}

function showBackground(element){
    let bg = 0
    element.style.visibility = 'visible'

    const interval = setInterval(()=>{
        bg += 0.1;
        if(bg >= 0.6){
            clearInterval(interval)
            bg = 0;
            return
        }
        element.style.backgroundColor = `rgba(255,255,255,${bg.toFixed(1)})`
    },75)
}

function toastAnimationProcessPurchase(){
    console.log("e")
    document.querySelector('.alert').classList.add('alert-error')
    setTimeout(()=>{
        document.querySelector('.alert').classList.remove('alert-error')
    },5000)
}
export {toastAnimationProcessPurchase};