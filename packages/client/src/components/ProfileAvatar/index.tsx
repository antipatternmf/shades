import React from 'react';
import styled from './index.module.pcss';

function ProfileAvatar() {
  return (
    <div className={styled.profile__avatar}>
      <input
        id="avatar"
        className={styled.profile__file}
        type="file"
        accept="image/png,image/jpg,image/jpeg,image/webp"
      />
      <label className={styled.profile__fileText} htmlFor="avatar">
        Изменить
      </label>
    </div>
  );
}

export default ProfileAvatar;
