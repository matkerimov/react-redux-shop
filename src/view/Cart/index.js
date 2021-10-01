import React from 'react';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {
    const cart = useSelector(store => store.cart)
    const dispatch = useDispatch()
    return (
        <div>
            {
                cart.length ?
                    <Table className="table-primary">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map(item =>

                            <tr>
                                <td>{item.title}</td>
                                <td>
                                    <button>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch({type: "ADD_TO_CART", payload: item})}>+</button>
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: item.id} ) }>x</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </Table> :
                    <h3 className="text-center">cart is empty</h3>

            }
        </div>
    );
};

export default Cart;