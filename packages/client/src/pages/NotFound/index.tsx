import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from 'components/icons/ArrowBackIcon';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={cx(styles.notFound)}>
      <div className={cx(styles.notFound__container)}>
        <button onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </button>
        <h1>Тут ничего нет (=</h1>
      </div>
    </div>
  );
}

export default NotFound;
