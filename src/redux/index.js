import { createStore } from 'redux'

const initialState = {
     catalog: [],
    cart: []
}

const reducer = (state = initialState, action) => {
switch (action.type){
    case "GET_CATALOG":
        return {...state, catalog: action.payload}
    case "ADD_TO_CART":
        return {...state, cart: [...state.cart, action.payload ]}
    default:
        return state
}
}

let store = createStore(reducer)
