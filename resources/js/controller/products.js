
function show(product_list, id){
    console.log(product_list)
    let product = product_list.find(item => item.id == id)
    return product || null
}
export{show};