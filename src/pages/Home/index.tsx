import { useState, useRef } from 'react';
import { FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  SearchUserInput,
  BackgroundImageContent,
  Title, SearchBox,
  ExtraStyleButton,
  ShowMessageError,
  UserAvatar,
  UserBoxInfo,
  UserLocation,
  UserLogin,
  Username,
  DescriptionUserLocation,
  DescriptionUserLogin,
  DescriptionUserName,
  UserBoxContentInfo,
  UserBoxDescription,
  NavigationButton
} from './style'

interface IUserResponse {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
}

const Home = () => {
  const [search, setSearch] = useState<IUserResponse>({} as IUserResponse);
  const [inputError, setInputError] = useState(false);

  const inputName = useRef<HTMLInputElement>(null);

  const history = useHistory();

  const handleSearchUser = async () => {
    try {
      if (inputName.current?.value) {
        const input = inputName.current.value;

        const response = await api.get<IUserResponse>(`/users/${input}`);

        setSearch(response.data);
        if (inputError) setInputError(false);
      }
    } catch {
      setInputError(!inputError)
    }
  };

  const handleNavigateToUserDetails = () => { };

  return (
    <BackgroundImageContent>
      <Container>
        <Title>
          Digite o nome do usuário para mais informações:
        </Title>
        <SearchBox>
          <SearchUserInput
            type="text"
            placeholder="Digite o nome do usuário"
            name="username"
            ref={inputName}
          />
          <ExtraStyleButton
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
        </SearchBox>
        {inputError && (
          <ShowMessageError>
            Usuário não encontrado, por favor tente um nome de usuário válido!
          </ShowMessageError>
        )}

        {Object.keys(search).length > 0 && (
          <UserBoxInfo>
            <UserBoxContentInfo>
              <NavigationButton
                type="button"
                onClick={handleNavigateToUserDetails}
              >
                <UserAvatar src={search.avatar_url} />
              </NavigationButton>
            </UserBoxContentInfo>
            <UserBoxDescription>
              <UserLogin>
                <DescriptionUserLogin>
                  Login:
              </DescriptionUserLogin>
                <br />
                {search.login}
              </UserLogin>
              <Username>
                <DescriptionUserName>
                  Nome do usuário:
              </DescriptionUserName>
                <br />
                {search.name}
              </Username>
              <UserLocation>
                <DescriptionUserLocation>
                  Localização:
              </DescriptionUserLocation>
                <br />
                {search.location}
              </UserLocation>
            </UserBoxDescription>
          </UserBoxInfo>
        )}
      </Container>
    </BackgroundImageContent>
  );
};

export default Home;
