import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.scss';

export default function HeaderCardButton() {
  return (
    <button type="button" className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        3
      </span>
    </button>
  );
}
