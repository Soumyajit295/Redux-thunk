const initialState = {
    products : [],
    singleProduct : []
}

const productReducers = (state = initialState,action) =>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{
                ...state,
                products : action.payload
            }
        
        case "FETCH_SINGLE_PRODUCT":
            return{
                ...state,
                singleProduct : action.payload
            }

        case "CLEAR":
            return{
                ...state,
                singleProduct : []
            }
            
        default:
            return state
    }
}

export default productReducers