export const addToCart = (product) => {
    return {
        type: "ADDTOCART",
        payload: (product)
    };
};

export const deleteFromCart = (product) => {
    return {
        type: "DELETEFROMCART",
        payload: (product)
    };
}; 

export const additionQtyToCart = (id) => {
    return {
        type: "ADDITIONQTYTOCART",
        payload:id
    };
};

export const reductionQtyFromCart = (id) => {
    return {
        type: "REDUCTIONQTYTOCART",
        payload:id
    };
};