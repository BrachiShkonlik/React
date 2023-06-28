export const customMiddleware = () => next => async action => {
    if (action.type === "CHANGE_USER_NAME") {
        const url = "https://shopname.myshopify.com/products.json"
        const http = await fetch(url)
        const res = await http.json()
        console.log("change user name middleware ", res)
        action.payload = res.products[0].handle

    }
    return next(action)
}

export const customMiddleware2 = () => next => action => {
    if (action.type === "CHANGE_USER_AGE") {
        console.log("change user age middleware")
    }
    return next(action)
}