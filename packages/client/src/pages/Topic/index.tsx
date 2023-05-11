import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import classNames from 'classnames/bind';
import TopBar from 'components/TopBar';
import MessageIcon from 'components/icons/MessageIcon';
import CrossIcon from 'components/icons/CrossIcon';
import NotFoundIcon from 'components/icons/NotFoundIcon';
import TopicItem from 'pages/Topic/TopicItem';
import { topics, TopicModel, CommentModel } from 'pages/Forum/mock';
import styles from 'pages/Topic/style.module.pcss';

const cx = classNames.bind(styles);

function Topic() {
  const topicID = Number(useParams().topicId);

  // @ts-ignore
  const [found, setFound] = useState<TopicModel>({});
  const [title, setTitle] = useState('');
  // @ts-ignore
  const [comments, setComments] = useState<CommentModel[]>([]);

  const [answer, setAnswer] = useState('');

  const user = useAppSelector((state) => state.user.data?.login);

  useEffect(() => {
    const foundID = topics.filter((item) => item.id === topicID);

    setFound(foundID[0]);
    setTitle(foundID[0].title);
    setComments(foundID[0].comments);
  }, [topicID]);

  return (
    <div className={cx('container', 'shadow')}>
      <TopBar title={title} />

      <div className={cx(styles.topic)}>
        <div className={cx(styles.topicWrapp)}>
          <div className={cx(styles.topicContent)}>

            <div className={cx(styles.topicItemOwner)}>
              <div className={cx(styles.topicItemRow)}>
                <div className={cx(styles.topicItemUser)}>
                  <div className={cx(styles.topicAvatar)} />
                  <span className={cx(styles.topicName)}>
                    {found.owner}
                  </span>
                </div>
              </div>
              <p className={cx(styles.topicComment)}>
                {found.desc}
              </p>
            </div>

            {comments.length ? (
              comments.map((item, index) => (
                <TopicItem
                  key={index}
                  name={item.name}
                  comment={item.comment}
                  toAnswer={item.toAnswer}
                  smiles={item.smiles}
                  user={user}
                  setAnswer={setAnswer}
                />
              ))
            ) : (
              <div className={cx(styles.topicNotFound)}>
                <NotFoundIcon />
                <span>
                  Комментариев нет
                </span>
              </div>
            )}
          </div>

          <div className={cx(styles.topicMessage)}>
            {answer && (
              <div className={cx(styles.topicFormAnswer)}>
                <span className={cx(styles.topicFeedback, styles.block)}>
                  Ответ
                </span>
                <span className={cx(styles.topicName)}>
                  {answer}
                </span>
                <button onClick={() => setAnswer('')}>
                  <CrossIcon />
                </button>
              </div>
            )}
            <div className={cx(styles.topicFormBox)}>
              <label className={cx(styles.topicFormField)}>
                <textarea className={cx(styles.topicFormText)} placeholder="Сообщение..." rows={2} />
              </label>
              <button>
                <MessageIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
