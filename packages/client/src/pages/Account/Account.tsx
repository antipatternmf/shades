import React, { FC, useRef } from "react";

// import { Link } from "react-router-dom";

import styled from "./Account.module.css";

import SideBar from "../../components/SideBar";
import AccountItem from "../../components/AccountItem";

const Account: FC = () => {

    const headFileRef = useRef(null);

    const onFileChange = () => {
        // @ts-ignore
        headFileRef.current.click();
    };

    return (
        <main className="wrapper">
            <div className={["container", styled.account].join(" ")}>
                <div className={styled.account__head}>
                    <div className={styled.account__headLogo}>
                        <input className={styled.account__headFile} ref={headFileRef} type="file" accept="image/png,image/jpg,image/jpeg,image/webp" />
                        <label className={styled.account__headLabel} onClick={onFileChange}>
                            Изменить
                        </label>
                    </div>
                </div>
                <div className={styled.account__body}>
                    <ul className={styled.account__list}>
                        <AccountItem type="email" name="email" value="John@gmail.com" placeholder="Почта" />
                        <AccountItem type="text" name="login" value="John1999" placeholder="Логин" />
                        <AccountItem type="text" name="nickname" value="John-Johnson" placeholder="Никнейм" />
                    </ul>
                    <div className={styled.account__choiceBox}>
                        <div className={styled.account__choiceWrapp}>
                            {/* <Link to="" className={styled.account__choiceLink}>
                                Изменить данные
                            </Link> */}
                            <a href="" className={styled.account__choiceLink}>
                                Изменить данные
                            </a>
                        </div>
                        <div className={styled.account__choiceWrapp}>
                            {/* <Link to="" className={styled.account__choiceLink}>
                                Изменить пароль
                            </Link> */}
                            <a href="" className={styled.account__choiceLink}>
                                Изменить пароль
                            </a>
                        </div>
                        <div className={styled.account__choiceWrapp}>
                            {/* <Link to="/" className={[styled.account__choiceLink, styled.exit].join(" ")}>
                                Выйти
                            </Link> */}
                            <a href="" className={styled.account__choiceLink}>
                                Выйти
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <SideBar path="/" />
        </main>
    );
};

export default Account;
