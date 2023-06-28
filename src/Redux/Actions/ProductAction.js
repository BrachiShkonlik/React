export const additionQty = (id) => {
    return {
        type: "ADDITIONQTY",
        payload:id
    };
};

export const reductionQty = (id) => {
    return {
        type: "REDUCTIONQTY",
        payload:id
    };
};