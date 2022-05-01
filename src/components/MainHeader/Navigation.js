import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.scss';

function Navigation(props) {
  return (
    <AuthContext.Consumer>
      {(ctx) => (
        <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button type="button" onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </AuthContext.Consumer>
  );
}

export default Navigation;
