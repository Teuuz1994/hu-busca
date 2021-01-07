import { FC } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './style';

const UserInfo: FC = () => {
  const params = useParams();

  return (
    <S.Container>
      <S.HeaderInfo>
        <S.AvatarInfo>
          <S.UserAvatar />
          <S.UserLoginName></S.UserLoginName>
        </S.AvatarInfo>
        <S.Username></S.Username>
      </S.HeaderInfo>
    </S.Container>
  )
};

export default UserInfo;
