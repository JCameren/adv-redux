import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/slices/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, quantity, total, price, id } = props.item

  const removeItem = () => {
    dispatch(cartActions.removeItem(id))
  }

  const addItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price
    }))
  }

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
