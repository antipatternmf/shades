import classNames from 'classnames/bind';
import { useTheme } from 'hooks/useTheme';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    if (theme === 'primary') {
      setTheme('secondary');
    } else if (theme === 'secondary') {
      setTheme('primary');
    }
  }

  return (
    <button
      className={cx(styles.toggle_theme, theme, 'shadow')}
      onClick={handleTheme}
    >
      <div className={cx(styles.toggle_theme__circle)} />
    </button>
  );
}

export default ToggleTheme;
