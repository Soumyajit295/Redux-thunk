export const fetchData = () =>{
    return async function(dispatch){
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            if(!response.ok){
                throw new Error("There is some problem")
            }
            const data = await response.json()
            dispatch({type : "FETCH_PRODUCTS" , payload : data})
        }
        catch(err){
            console.log(err)
        }
    }
}

export const fetchSingleProduct = (id) =>{
    return async function(dispatch){
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            if(!response.ok){
                throw new Error("There is some problem")
            }
            const data = await response.json()
            dispatch({type : "FETCH_SINGLE_PRODUCT" , payload : data})
        }
        catch(err){
            console.log(err)
        }
    }
}

export const clearTheSingleProduct = ()=>{
    return {
        type : "CLEAR",
    }
}