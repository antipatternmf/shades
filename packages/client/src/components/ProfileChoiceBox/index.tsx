import React from 'react';
import styled from './index.module.pcss';

function ProfileChoiceBox() {
  return (
    <div className={styled.profile__choiceBox}>
      <div className={styled.profile__choiceWrapp}>
        <a href="/" className={styled.profile__choiceLink}>
          Изменить данные
        </a>
      </div>
      <div className={styled.profile__choiceWrapp}>
        <a href="/" className={styled.profile__choiceLink}>
          Изменить пароль
        </a>
      </div>
      <div className={styled.profile__choiceWrapp}>
        <a href="/" className={styled.profile__choiceLink}>
          Выйти
        </a>
      </div>
    </div>
  );
}

export default ProfileChoiceBox;
