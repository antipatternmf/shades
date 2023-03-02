import React from 'react';
import ProfileAvatar from '../../components/ProfileAvatar';
import ProfileItem from '../../components/ProfileItem';
import ProfileChoiceBox from '../../components/ProfileChoiceBox';
import SideBar from '../../components/SideBar';
import styled from './index.module.pcss';

function Profile() {
  return (
    <main className="wrapper">
      <div className={['container', styled.profile].join(' ')}>
        <div className={styled.profile__head}>
          <ProfileAvatar />
        </div>
        <div className={styled.profile__body}>
          <ul className={styled.profile__list}>
            <ProfileItem type="email" name="email" value="John@gmail.com" placeholder="Почта" disabled={true} />
            <ProfileItem type="text" name="login" value="John1999" placeholder="Логин" disabled={true} />
            <ProfileItem type="text" name="nickname" value="John-Johnson" placeholder="Никнейм" disabled={true} />
          </ul>
          <ProfileChoiceBox />
        </div>
      </div>
      <SideBar path="/" />
    </main>
  );
}

export default Profile;
