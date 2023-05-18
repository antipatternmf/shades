import classNames from 'classnames/bind';
import EmotionIcon from 'components/icons/EmotionIcon';
import { useState } from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

type EmotionPopUpWithTriggerProps = {
  onSelect?: (emoji: number) => void;
  ownReaction?: number;
};

const smilesList = [
  128077, 128078, 128515, 128552, 128139, 128293, 128545, 128169, 128170, 128171, 128172, 128173,
  128174,
];

export default function EmotionPopUpWithTrigger({
  onSelect,
  ownReaction,
}: EmotionPopUpWithTriggerProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={cx(styles.threadPostHeadReactionEmotionButtonWrapper)}>
      <button
        className={cx(styles.threadPostHeadReactionEmotionButton)}
        onClick={() => setIsVisible((state) => !state)}
      >
        <EmotionIcon />
      </button>
      {isVisible && (
        <div className={cx(styles.threadPostHeadReactionEmotionPopup)}>
          {smilesList.map((emoji) => (
            <button
              className={cx(
                styles.threadPostHeadReactionEmotionPopupItem,
                Number(ownReaction) === emoji &&
                  styles.threadPostHeadReactionEmotionPopupItemActive,
              )}
              onClick={() => onSelect?.(emoji)}
              key={emoji}
            >
              {String.fromCodePoint(emoji)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
