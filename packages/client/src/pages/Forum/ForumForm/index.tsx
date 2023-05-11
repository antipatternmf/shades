import classNames from 'classnames/bind';
import Input from 'components/Input';
import Button from 'components/Button';
import styles from 'pages/Forum/ForumForm/style.module.pcss';

const cx = classNames.bind(styles);

type ForumFormProps = {
  setModalStatus: (modalStatus: boolean) => void;
};

function ForumForm({ setModalStatus }: ForumFormProps) {
  return (
    <form className={cx(styles.forumForm)}>
      <div>
        <Input type="text" placeholder="Название" />
        <label className={cx(
          styles.forumFormField,
          styles.forumFormErrorField,
        )}
        >
          <textarea
            className={cx(styles.forumFormText)}
            placeholder="Описание"
          />
          <span className={cx(styles.forumFormErrorTxt)}>
            Error
          </span>
        </label>
      </div>
      <div>
        <Button type="submit" variant="first">
          Сохранить
        </Button>
        <Button type="button" variant="second" onClick={() => setModalStatus(false)}>
          Отмена
        </Button>
      </div>
    </form>
  );
}

export default ForumForm;
