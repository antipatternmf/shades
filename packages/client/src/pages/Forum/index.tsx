import { useState } from 'react';
import { useAppSelector } from 'store';
import classNames from 'classnames/bind';
import TopBar from 'components/TopBar';
import Modal from 'components/Modal';
import CrossIcon from 'components/icons/CrossIcon';
import NotFoundIcon from 'components/icons/NotFoundIcon';
import ForumItem from 'pages/Forum/ForumItem';
import ForumForm from 'pages/Forum/ForumForm';
import { topics } from 'pages/Forum/mock';
import styles from 'pages/Forum/style.module.pcss';

const cx = classNames.bind(styles);

function Forum() {
  const title = 'Форум';

  const [topic] = useState(topics);
  const [modalStatus, setModalStatus] = useState(false);

  const user = useAppSelector((state) => state.user.data?.login);

  return (
    <div className={cx('container', 'shadow')}>
      <TopBar title={title} />

      <div className={cx(styles.forum)}>
        <Modal isOpen={modalStatus}>
          <ForumForm setModalStatus={setModalStatus} />
        </Modal>

        <div className={cx(styles.forumAddTopic)}>
          <span>
            Создать тему
          </span>
          <button className={cx('shadow')} onClick={() => setModalStatus(true)}>
            <CrossIcon />
          </button>
        </div>

        {topic.length ? (
          <div>
            <div className={cx(styles.forumHead)}>
              <span>
                Тема
              </span>
              <span>
                Ответов
              </span>
            </div>

            <div className={cx(styles.forumBody, topic.length > 4 ? styles.scroll : '')}>
              {topic.map((item) => (
                <ForumItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  owner={item.owner}
                  desc={item.desc}
                  answers={item.comments.length}
                  user={user}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={cx(styles.forumNotFound)}>
            <NotFoundIcon />
            <span>
              Темы не найдены
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Forum;
