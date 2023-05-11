import { useState } from 'react';
import classNames from 'classnames/bind';
import EmotionIcon from 'components/icons/EmotionIcon';
import { SmileModel } from 'pages/Forum/mock';
import styles from 'pages/Topic/style.module.pcss';

const cx = classNames.bind(styles);

type TopicItemProps = {
  name: string;
  comment: string;
  toAnswer: string;
  smiles?: SmileModel[];
  user?: string;
  setAnswer: (answer: string) => void;
};

function TopicItem({ name, comment, toAnswer, smiles, user, setAnswer }: TopicItemProps) {
  const [popup, setPopup] = useState(false);

  const smilesList = [
    128077,
    128078,
    128515,
    128552,
    128139,
    128293,
    128545,
    128169,
  ];

  return (
    <div className={cx(styles.topicItem)}>
      <div className={cx(styles.topicItemRow)}>
        <div className={cx(styles.topicItemUser)}>
          <div className={cx(styles.topicAvatar)} />
          <span className={cx(styles.topicName)}>
            {name}
          </span>
          {toAnswer && (
            <div className={cx(styles.topicItemAnswer)}>
              <span className={cx(styles.topicFeedback, styles.block)}>
                Ответ
              </span>
              <span className={cx(styles.topicName)}>
                {toAnswer}
              </span>
            </div>
          )}
        </div>

        {user !== name ? (
          <div className={cx(styles.topicItemUserActions)}>
            <span className={cx(styles.topicFeedback)} onClick={() => setAnswer(name)}>
              Ответить
            </span>
            <button onClick={() => setPopup(!popup)}>
              <EmotionIcon />
            </button>
          </div>
        ) : (
          null
        )}
      </div>

      <p className={cx(styles.topicComment)}>
        {comment}
      </p>

      {smiles && (
        smiles.length && (
          <div className={cx(styles.topicEmotions)}>
            {smiles.map((item, index) => (
              <span key={index}>
                {String.fromCodePoint(item.smile)}
                <b>{item.count}</b>
              </span>
            ))}
          </div>
        )
      )}

      {popup && (
        <div className={cx(styles.topicEmotions, styles.change)}>
          {smilesList.map((item, index) => (
            <span key={index} onClick={() => setPopup(false)}>
              {String.fromCodePoint(item)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopicItem;
