import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import cartEmptyImage from '../components/assets/img/empty-cart.png';
import { CartItem } from '../components';
import { removeCartItem } from '../redux/actions/cart';

function Cart() {
    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
    
    const addedPizzas = Object.keys(items).map((key) => {
        return items[key].items[0];
    });
    
    const onRemoveItem = (id) => {
        if (window.confirm('Are you sure to delete this pizza?')) {
          dispatch(removeCartItem(id));
        }
    };

    const onClickOrder = () => {
        console.log('YOUR ORDER', items);
    };

    return (
        <React.Fragment>
            {totalCount ? (
                <div className="cart d-flex flex-column align-items-center">
                    <div className="cart__title">Your Cart</div>
                    <div className="cart__items">

                        {addedPizzas.map((obj) => (
                            <CartItem key={obj.id} id={obj.id} image={obj.image} name={obj.name} type={obj.type} size={obj.size} totalPrice={items[obj.id].totalPrice} totalCount={items[obj.id].items.length} onRemove={onRemoveItem} />
                        ))}

                    </div>

                    <span>
                        Order sum: <b>$ {totalPrice}</b>
                    </span>

                    <div className="cart__order" data-toggle="modal" data-target="#dataModal" onClick={onClickOrder}>Order now</div>
                    
                </div>
            ) : (
                <div className="cart__empty d-flex flex-column align-items-center">
                    <div className="cart__empty-title">Cart is empty 🙄</div>
                    <img src={cartEmptyImage} alt="Empty Cart" className="cart__empty-image" width="350" height="300" />
                    <Link to="/">
                        <div className="cart__empty-return">Return Back</div>
                    </Link>
                </div>
            )}

            <div className="modal fade dataModal" id="dataModal" tabIndex="-1" role="dialog" aria-labelledby="dataModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Contact data</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">


                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword">Name</label>
                                        <input type="text" className="form-control" id="inputPassword" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="ul. Grunwaldzka 1" />
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">Pay By Cash</label>
                                    </div>
                                </div>
                                
                                <div className="dataModal__buttons d-flex justify-content-end">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Order & Pay</button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Cart;