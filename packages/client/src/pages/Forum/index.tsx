import classNames from 'classnames/bind';
import TopBar from 'components/TopBar';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Forum() {
  const title = 'Форум';

  return (
    <div className={cx('container', 'shadow')}>
      <TopBar title={title} />

      <div className={cx(styles.forum)}>
        <table>
          <thead>
            <tr>
              <th>Форумы</th>
              <th>Темы</th>
              <th>Ответы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вопросы/Предложения</td>
              <td>11</td>
              <td>54</td>
            </tr>
            <tr>
              <td>Флудилка</td>
              <td>222</td>
              <td>657</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Forum;
