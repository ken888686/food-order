import Modal from '../UI/Modal';
import classes from './Cart.module.scss';

export default function Cart(props) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{
        id: 'c1',
        name: 'Chicken Burger',
        amount: 2,
        price: 10,
      }].map((item) => <li key={item.id}>{item.name}</li>)}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>200</span>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes['button--alt']}
          onClick={props.onClose}
        >
          Close
        </button>
        <button
          type="button"
          className={classes.button}
        >
          Order
        </button>
      </div>
    </Modal>
  );
}
