import classNames from 'classnames/bind';

import React, { useState } from 'react';
import Pagination from 'components/Pagination';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function LeaderBoard() {
  const [currentPage, setCurrentPage] = useState(100);

  return (
    <div className={cx('container')}>
      LeaderBoard
      <Pagination
        currentPage={currentPage}
        totalCount={100}
        pageSize={10}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default LeaderBoard;
