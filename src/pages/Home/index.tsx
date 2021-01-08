import { useState, useRef } from 'react';
import { FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { IUserProps, useDetailUser } from '../../contexts/UserDetailsContext';
import api from '../../services/api';

import * as S from './style'

const Home = () => {
  const [search, setSearch] = useState<IUserProps>({} as IUserProps);
  const [inputError, setInputError] = useState(false);

  const inputName = useRef<HTMLInputElement>(null);

  const history = useHistory();

  const { saveUser } = useDetailUser();

  const handleSearchUser = async () => {
    try {
      if (inputName.current?.value) {
        const input = inputName.current.value;

        const response = await api.get<IUserProps>(`/users/${input}`);

        setSearch(response.data);
        if (inputError) setInputError(false);
      }
    } catch {
      setInputError(!inputError)
    }
  };

  const handleNavigateToUserDetails = async () => {
    saveUser(search)
    history.push('/details')
  };

  return (
    <S.BackgroundImageContent>
      <S.Container>
        <S.Title>
          Digite o nome do usuário para mais informações:
        </S.Title>
        <S.SearchBox>
          <S.SearchUserInput
            type="text"
            placeholder="Digite o nome do usuário"
            name="username"
            ref={inputName}
          />
          <S.ExtraStyleButton
            type="button"
            textContent="Buscar Usuário"
            onClick={handleSearchUser}
            icon={
              <FiUser
                size={24}
                color="#fff"
                style={{
                  marginRight: 10
                }}
              />
            }
          />
        </S.SearchBox>
        {inputError && (
          <S.ShowMessageError>
            Usuário não encontrado, por favor tente um nome de usuário válido!
          </S.ShowMessageError>
        )}

        {Object.keys(search).length > 0 && (
          <S.UserBoxInfo>
            <S.UserBoxContentInfo>
              <S.NavigationButton
                type="button"
                onClick={handleNavigateToUserDetails}
              >
                <S.UserAvatar src={search.avatar_url} />
              </S.NavigationButton>
            </S.UserBoxContentInfo>
            <S.UserBoxDescription>
              <S.UserLogin>
                <S.DescriptionUserLogin>
                  Login:
              </S.DescriptionUserLogin>
                <br />
                {search.login}
              </S.UserLogin>
              <S.Username>
                <S.DescriptionUserName>
                  Nome do usuário:
              </S.DescriptionUserName>
                <br />
                {search.name}
              </S.Username>
              <S.UserLocation>
                <S.DescriptionUserLocation>
                  Localização:
              </S.DescriptionUserLocation>
                <br />
                {search.location}
              </S.UserLocation>
            </S.UserBoxDescription>
          </S.UserBoxInfo>
        )}
      </S.Container>
    </S.BackgroundImageContent>
  );
};

export default Home;
