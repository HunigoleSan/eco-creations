const API = 'https://fakestoreapi.com';
const ALL_PRODUCTS = `${API}/products`;

let products_list = ""

async function getProducts(){
    try {
        const res = await fetch(ALL_PRODUCTS);
        const products = await res.json()
        if(!res.ok){
            throw new Error(`Error: ${res.ok}: No se pudo obtener los productos`)
        }
        products_list = products

        return products_list;
    } catch (error) {
        console.error('La petición fallo:', error.message)
        return [];
    }
}
async function findProducts(id){
    const FIND_PRODUCT = `${ALL_PRODUCTS}/${id}`;

    try {
        const res = await fetch(FIND_PRODUCT)
        if(!res.ok){
            console.warn('No se pudo obtener el producto, ocurrio un problema')
            return []
        }
        const product = await res.json()
        return product;
    } catch (error) {
        console.error('Error: ', error.message);
        return [];
    }

}

export {getProducts, findProducts, products_list};