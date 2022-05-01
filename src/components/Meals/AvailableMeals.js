import DUMMY_MEALS from './dummy-meals';
import classes from './AvailableMeals.module.scss';

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(
    (meal) => <li key={meal.id}>{meal.name}</li>,
  );

  return (
    <section className={classes.meals}>
      <ul>
        {mealsList}
      </ul>
    </section>
  );
}
