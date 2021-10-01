import { createStore } from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {
     catalog: [],
    cart: []
}

const reducer = (state = initialState, action) => {
switch (action.type){
    case "GET_CATALOG":
        return {...state, catalog: action.payload}
    case "ADD_TO_CART":
        if (state.cart.find(item => item.id === action.payload.id)){
            return {...state, cart: state.cart.map(el => el.id === action.payload.id ? {...el, quantity: el.quantity + 1} : el)}
        }
        return {...state, cart: [...state.cart, {...action.payload, quantity: 1} ]}
    case "REMOVE_FROM_CART":
        return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
    default:
        return state
}
}

export const store = createStore(reducer, composeWithDevTools())
