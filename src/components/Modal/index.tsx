import { FC, useState, useCallback } from 'react';
import Modal from '@material-ui/core/Modal';
import { useHistory } from 'react-router-dom';

import { IUserProps } from '../../contexts/UserDetailsContext';
import { useDetailUser } from '../../contexts/UserDetailsContext';

import * as S from '../../pages/Home/style';
import { ButtonModal, ModalContainer } from './style'

interface IUsersSearchs {
  users: IUserProps[]
};

const ModalShow: FC<IUsersSearchs> = ({ users }) => {
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const { saveUser } = useDetailUser();

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClose = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleNavigateToUserDetails = useCallback((user: IUserProps) => {
    saveUser(user)
    history.push('/details')
  }, [history, saveUser])

  return (
    <>
      <ButtonModal
        textContent="Pesquisados Recentemente"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          background: 'var(--dark-color)',
          opacity: '80%'
        }}
      >
        <ModalContainer>
          {users.map(user => (
            <>
              <S.UserBoxContentInfo>
                <S.NavigationButton
                  type="button"
                  onClick={() => handleNavigateToUserDetails(user)}
                >
                  <S.UserAvatar src={user.avatar_url} />
                </S.NavigationButton>
              </S.UserBoxContentInfo>
              <S.UserBoxDescription>
                <S.UserLogin>
                  <S.DescriptionUserLogin>
                    Login:
            </S.DescriptionUserLogin>
                  <br />
                  {user.login}
                </S.UserLogin>
                <S.Username>
                  <S.DescriptionUserName>
                    Nome do usuário:
            </S.DescriptionUserName>
                  <br />
                  {user.name}
                </S.Username>
                <S.UserLocation>
                  <S.DescriptionUserLocation>
                    Localização:
            </S.DescriptionUserLocation>
                  <br />
                  {user.location}
                </S.UserLocation>
              </S.UserBoxDescription>
            </>
          ))}
        </ModalContainer>
      </Modal>
    </>
  )
};

export default ModalShow;
