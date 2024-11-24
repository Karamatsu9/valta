import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Cart = ({ cart, setCart }) => {
    // Increase Quantity of cart product
    const incqty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm;
        }));
    };

    // Decrease Quantity of cart product
    const decqty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty > 1) { // Prevent qty from going below 1
            setCart(cart.map((curElm) => {
                return curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm;
            }));
        }
    };

    // Removing cart product
    const removeproduct = (product) => {
        setCart(cart.filter((curElm) => curElm.id !== product.id));
    };

    // Total Price Calculation
    const total = cart.reduce((price, item) => 
        price + item.qty * parseFloat(item.price.replace(/\./g, '').replace(',', '.')), 0
    );

    return (
        <div className='cart'>
            <h3>#keranjang</h3>
            {cart.length === 0 ? (
                <div className='empty_cart'>
                    <h2>Keranjang belanjamu kosong</h2>
                    <Link to='/shop'><button>Belanja sekarang</button></Link>
                </div>
            ) : (
                <div className='container'>
                    {cart.map((curElm) => (
                        <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.image} id="gambarUtama" alt={curElm.Name}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                    <h4>{curElm.cat}</h4>
                                    <h3>{curElm.Name}</h3>
                                    <p>Harga: Rp{curElm.price}</p>
                                    <p>Total: Rp{(parseFloat(curElm.price.replace(/\./g, '').replace(',', '.')) * curElm.qty).toLocaleString('id-ID')}</p>
                                </div>
                                <div className='quantity'>
                                    <button onClick={() => incqty(curElm)}>+</button>
                                    <input type='number' value={curElm.qty} readOnly />
                                    <button onClick={() => decqty(curElm)}>-</button>
                                </div>
                                <div className='icon'>
                                    <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className='bottom'>
                    <div className='Total'>
                        <h4>Total semua: Rp{total.toLocaleString('id-ID')}</h4>
                    </div>
                    <button>checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;