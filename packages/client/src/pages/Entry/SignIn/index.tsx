import React from 'react';
import EntryItem from '../../../components/EntryItem';
import FormButton from '../../../components/FormButton';
import styled from '../index.module.pcss';

function SignIn() {
  return (
    <main className="wrapper">
      <div className={['container', styled.entry].join(' ')}>
        <h2 className={styled.entry__title}>
          Вход
        </h2>
        <form className={styled.entry__form}>
          <ul className={styled.entry__list}>
            <EntryItem type="text" name="login" placeholder="Логин" />
            <EntryItem type="password" name="password" placeholder="Пароль" />
          </ul>
          <div>
            <div className={styled.entry__choiceBox}>
              <a href="/" className={styled.entry__choiceLink}>
                У вас нет аккаунта? Зарегистрируйтесь
              </a>
            </div>
            <FormButton btnText="Авторизоваться" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignIn;
