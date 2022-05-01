/* eslint-disable react/jsx-no-bind */
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.scss';
import CartItem from './CartItem';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => { console.log(id); };

  const cartItemAddHandler = (item) => { console.log(item); };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes['button--alt']}
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && (
        <button
          type="button"
          className={classes.button}
        >
          Order
        </button>
        )}
      </div>
    </Modal>
  );
}
