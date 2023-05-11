import classNames from 'classnames/bind';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIcon from 'components/icons/ArrowBackIcon';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function BackBtn() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathTokens = location.pathname.split('/');
  const prevPageUrl = pathTokens.slice(0, pathTokens.length - 1).join('/') || '/';

  return (
    <button
      className={cx(styles.topbar__backButton, 'shadow')}
      onClick={() => navigate(prevPageUrl)}
    >
      <ArrowBackIcon />
    </button>
  );
}

export default BackBtn;
