import React from 'react';
import EntryItem from '../../../components/EntryItem';
import FormButton from '../../../components/FormButton';
import styled from '../index.module.pcss';

function SignUp() {
  return (
    <main className="wrapper">
      <div className={['container', styled.entry].join(' ')}>
        <h2 className={styled.entry__title}>
          Регистрация
        </h2>
        <form className={styled.entry__form}>
          <ul className={styled.entry__list}>
            <EntryItem type="email" name="email" placeholder="Почта" />
            <EntryItem type="text" name="login" placeholder="Логин" />
            <EntryItem type="text" name="nick-name" placeholder="Никнейм" />
            <EntryItem type="password" name="password" placeholder="Пароль" />
            <EntryItem type="password" name="confirm-password" placeholder="Повторите пароль" />
          </ul>
          <div>
            <div className={styled.entry__choiceBox}>
              <a href="/" className={styled.entry__choiceLink}>
                У вас уже есть аккаунт? Авторизуйтесь
              </a>
            </div>
            <FormButton btnText="Зарегистрироваться" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignUp;
