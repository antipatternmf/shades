import classNames from 'classnames/bind';
import SignInIcon from 'components/icons/SignInIcon';
import SignUpIcon from 'components/icons/SignUpIcon';
import { Link } from 'react-router-dom';
import { Paths } from '../../../router';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function Welcome() {
  const description = `Shades - это игра-головоломка, в которой игрокам необходимо соединять точки разными цветами, чтобы заполнить поле цветными линиями. 
  Цель игры - заполнить все поле, используя минимальное количество ходов.`;

  return (
    <div className={cx(styles.welcome)}>
      <p className={cx(styles.welcome__desc)}>{description}</p>
      <div className={cx(styles.welcome__box)}>
        <Link
          className={cx(styles.welcome__link, 'shadow')}
          to={Paths.SignIn}
        >
          <div className={cx(styles.welcome__icon)}>
            <SignInIcon />
          </div>
          <span>Авторизоваться</span>
        </Link>
        <Link
          className={cx(styles.welcome__link, 'shadow')}
          to={Paths.SignUp}
        >
          <div className={cx(styles.welcome__icon)}>
            <SignUpIcon />
          </div>
          <span>Зарегистрироваться</span>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
