
const cart = [];
const CartReduser = (state = cart, action) =>{

    switch(action.type){

        case "ADDTOCART" :{
            const product = state.find(p=> p.id === action.payload.id);
            if(product===undefined){
                return [...state, action.payload ]
            }
            else {
                product.qty += 1;
                return state;
            }

            }

        case "DELETEFROMCART":{ 
                state = state.filter(item => item.id !== action.payload)
                return state;
        }
        case "ADDITIONQTYTOCART":{
            const product = state.find(p=> p.id === action.payload);
            if(product != undefined){
                product.qty +=1;
            }
            else if(product === undefined){
                alert("product==undefined")
            }
            return state;
        }

        case "REDUCTIONQTYTOCART":{
            const product = state.find(p=>{return p.id === action.payload;})
            if(product.qty > 1){
                product.qty -= 1;
                return state;
            }
            if(product.qty === 1){
                state = state.filter(item => item.id !== action.payload)
                return state;
            }
        }
    }
    return state;
}
export default CartReduser;

