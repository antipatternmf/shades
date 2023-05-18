import type { EmotionType } from 'api/forum';
import classNames from 'classnames/bind';
import styles from './style.module.pcss';

type EmotionsToPostProps = {
  items: EmotionType[];
};

type EmotionsGroup = {
  emotion: string;
  count: number;
};

function sortStringsFn(first: string, second: string) {
  if (first === second) {
    return 0;
  }

  if (first < second) {
    return -1;
  }

  return 1;
}

function groupEmotions(items: EmotionType[]) {
  const sortedEmotions = items.sort((a, b) => sortStringsFn(a.emotion, b.emotion));

  return sortedEmotions.reduce((acc, item) => {
    const prevElement = acc[acc.length - 1];

    if (prevElement?.emotion === item.emotion) {
      return [
        ...acc.slice(0, acc.length - 1),
        {
          emotion: prevElement.emotion,
          count: prevElement.count + 1,
        },
      ];
    }

    return [
      ...acc,
      {
        emotion: item.emotion,
        count: 1,
      },
    ];
  }, [] as EmotionsGroup[]);
}

const cx = classNames.bind(styles);

export default function EmotionsToPost({ items }: EmotionsToPostProps) {
  const groups = groupEmotions(items);

  return (
    <div className={cx(styles.threadPostEmotions)}>
      {groups.map((item) => (
        <div
          className={cx(styles.threadPostEmotionsItem)}
          key={item.emotion}
        >
          {String.fromCodePoint(Number(item.emotion))}
          <div className={cx(styles.threadPostEmotionsItemCounter)}>{item.count}</div>
        </div>
      ))}
    </div>
  );
}
