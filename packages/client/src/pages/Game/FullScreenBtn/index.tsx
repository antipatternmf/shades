import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import DecreaseIcon from 'components/icons/DecreaseIcon';
import IncreaseIcon from 'components/icons/IncreaseIcon';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function FullScreenBtn() {
  const [state, setState] = useState<boolean>(false);

  const handleFullScreen = () => {
    if (state) {
      document.exitFullscreen();
      setState(!state);
    } else {
      document.documentElement.requestFullscreen();
      setState(!state);
    }
  };

  const changeFullScreen = () => {
    if (!document.fullscreenElement) {
      setState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', changeFullScreen);

    return () => {
      document.removeEventListener('fullscreenchange', changeFullScreen);
    };
  }, []);

  return (
    <button
      className={cx(styles.fullscreenBtn)}
      onClick={handleFullScreen}
    >
      {state ? <DecreaseIcon /> : <IncreaseIcon />}
    </button>
  );
}

export default FullScreenBtn;
