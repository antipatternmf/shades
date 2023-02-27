import React, { FC } from "react";

// import { Link } from "react-router-dom";

import styled from "./Entry.module.css";

import EntryItem from "../../components/EntryItem";
import FormButton from "../../components/FormButton";

const SignIn: FC = () => {

    return (
        <main className="wrapper">
            <div className={["container", styled.entry].join(" ")}>
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
                            {/* <Link to="/sign-up" className={styled.entry__choiceLink}>
                                У вас нет аккаунта? Зарегистрируйтесь
                            </Link> */}
                            <a href="" className={styled.entry__choiceLink}>
                                У вас нет аккаунта? Зарегистрируйтесь
                            </a>
                        </div>
                        <FormButton btnText="Авторизоваться" />
                    </div>
                </form>
            </div>
        </main>
    );
};

export default SignIn;
