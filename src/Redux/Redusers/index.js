import { combineReducers } from "redux";
import ProductsReduser from "./ProductsReduser";
import CartReduser from "./CartReduser";

export const allReducers = combineReducers({
    ProductsReduser: ProductsReduser,
    CartReduser : CartReduser
})