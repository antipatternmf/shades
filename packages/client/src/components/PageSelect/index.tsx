import classNames from 'classnames/bind';
import { useMemo } from 'react';
import { generatePaginationButtons } from './utils';
import styles from './style.module.pcss';

type PageSelectProps = {
  currentPage: number;
  totalPages: number;
  onPageSelect?: (page: number) => void;
};

const cx = classNames.bind(styles);

export default function PageSelect({ currentPage, totalPages, onPageSelect }: PageSelectProps) {
  const pages = useMemo(
    () =>
      generatePaginationButtons({
        totalPages,
        currentPage,
      }),
    [totalPages, currentPage],
  );

  return (
    <div className={cx(styles.pageSelect)}>
      {pages.map((item, index) => {
        if (item === 'dots') {
          return (
            <div
              key={`key-${index}`}
              className={cx(styles.pageSelectDots)}
            >
              •••
            </div>
          );
        }

        const isCurrentPage = item === currentPage;

        return (
          <button
            key={item}
            className={cx(
              styles.pageSelectPage,
              isCurrentPage && styles.pageSelectPageCurrent,
              'shadow',
            )}
            onClick={() => !isCurrentPage && onPageSelect?.(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
