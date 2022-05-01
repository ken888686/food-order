import HeaderCardButton from './HeaderCardButton';

import classes from './Header.module.scss';
import mealsImage from '../../assets/meals.jpeg';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img
          src={mealsImage}
          alt="A table full of delicious food!"
        />
      </div>
    </>
  );
}
