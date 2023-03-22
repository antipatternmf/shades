import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.pcss';

type HeaderProps = {
  title?: string;
  isShowBackButton?: boolean
};

const cx = classNames.bind(styles);

export default function Header({
                                 title = '',
                                 isShowBackButton = true,
                               }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={cx(styles.header)}>
      <div>
        {
          isShowBackButton ? (
            <button
              className={cx(styles.headerBackButton, 'shadow')}
              onClick={() => navigate(-1)}
            >
              &#8592;
            </button>
) : ''
        }
      </div>
      <h1 className={cx(styles.headerTitle)}>{title}</h1>
      <div />
    </header>
  );
}
