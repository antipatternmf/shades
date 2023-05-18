import classNames from 'classnames/bind';
import Input from 'components/Input';
import LoadingOverlay from 'components/LoadingOverlay';
import Button from 'components/Button';
import { useState, type FormEvent } from 'react';
import { inputChangeHandlerFactory } from 'utils/inputChangeHandlerFactory';
import { useCreateThread } from '../lib/hooks';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

type CreateThreadFormProps = {
  onSubmit: () => void;
  onCancel: () => void;
};

export default function CreateThreadForm({ onSubmit, onCancel }: CreateThreadFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const []

  const { post, isLoading } = useCreateThread();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await post({ title, description });
    onSubmit();
  };

  return (
    <>
      <form
        className={cx(styles.forumForm)}
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            type="text"
            placeholder="Название"
            value={title}
            onChange={inputChangeHandlerFactory(setTitle)}
          />
          <label className={cx(styles.forumFormField, styles.forumFormErrorField)}>
            <textarea
              className={cx(styles.forumFormText)}
              placeholder="Описание"
              value={description}
              onChange={inputChangeHandlerFactory(setDescription)}
            />
          </label>
        </div>
        <div>
          <Button
            type="submit"
            variant="first"
          >
            Сохранить
          </Button>
          <Button
            type="button"
            variant="second"
            onClick={onCancel}
          >
            Отмена
          </Button>
        </div>
      </form>

      {isLoading && <LoadingOverlay />}
    </>
  );
}
