import CrossIcon from 'components/icons/CrossIcon';
import MessageIcon from 'components/icons/MessageIcon';
import LoadingOverlay from 'components/LoadingOverlay';
import classNames from 'classnames/bind';
import { useState, type FormEvent } from 'react';
import { inputChangeHandlerFactory } from 'utils/inputChangeHandlerFactory';
import { useSendThreadPost } from '../lib/hooks';
import styles from './style.module.pcss';

type PostTextAreaProps = {
  threadId: number;
  replyingTo?: {
    id: number;
    login: string;
  };
  cancelReply?: () => void;
  onSuccess?: () => void;
};

const cx = classNames.bind(styles);

export default function PostTextArea({
  replyingTo,
  cancelReply,
  threadId,
  onSuccess,
}: PostTextAreaProps) {
  const [postText, setPostText] = useState('');
  const { sendPost, isLoading } = useSendThreadPost(threadId);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const newPost = await sendPost({ text: postText, parentPostId: replyingTo?.id });

    if (newPost) {
      setPostText('');
      cancelReply?.();
      onSuccess?.();
    }
  };

  return (
    <>
      <form
        className={cx(styles.postTextArea)}
        onSubmit={handleSubmit}
      >
        {!!replyingTo && (
          <div className={cx(styles.postTextAreaAnswer)}>
            <span className={cx(styles.postTextAreaAnswerLabel)}>Ответ</span>
            <span className={cx(styles.postTextAreaAnswerName)}>{replyingTo.login}</span>
            <button onClick={cancelReply}>
              <CrossIcon />
            </button>
          </div>
        )}
        <div className={cx(styles.postTextAreaFormBox)}>
          <label className={cx(styles.postTextAreaFormField)}>
            <textarea
              className={cx(styles.postTextAreaFormText)}
              placeholder="Сообщение..."
              rows={2}
              value={postText}
              onChange={inputChangeHandlerFactory(setPostText)}
            />
          </label>
          <button type="submit">
            <MessageIcon />
          </button>
        </div>
      </form>
      {isLoading && <LoadingOverlay />}
    </>
  );
}
