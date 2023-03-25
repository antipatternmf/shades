import classNames from 'classnames/bind';

import React from 'react';
import Header from 'components/Header';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function NotFound() {
  const title = '404';

  return (
    <div className={cx(styles.notFound)}>
      <div className={cx(styles.notFoundContainer)}>
        <Header title={title} />

        <h3>Тут ничего нет (=</h3>
      </div>
    </div>
  );
}

export default NotFound;
