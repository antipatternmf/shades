import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from 'components/icons/ArrowBackIcon';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function BackBtn() {
  const navigate = useNavigate();

  return (
    <button
      className={cx(styles.topbar__backButton, 'shadow')}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon />
    </button>
  );
}

export default BackBtn;
