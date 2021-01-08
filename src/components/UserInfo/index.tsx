import { FC, useState, useEffect } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GiShadowFollower } from 'react-icons/gi';
import { GoRepo } from 'react-icons/go';
import { FiArrowRight } from 'react-icons/fi';
import { format } from 'date-fns';

import api from '../../services/api';
import { useDetailUser, IUserProps } from '../../contexts/UserDetailsContext';

import logoImgWhite from '../../assets/logo-white.svg';

import * as S from './style';

interface IRepository {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
}

const UserInfo: FC = () => {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const { getUser } = useDetailUser();

  useEffect(() => {
    setUser(getUser());
    api.get(`/users/${user.login}/repos`).then(response => {
      setRepositories(response.data)
    }).catch(err => console.log(err))
  }, [getUser, user.login]);

  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <S.ImageLogo src={logoImgWhite} />
        </S.ImageContainer>
        <S.HeaderInfo>
          <S.AvatarInfo>
            <S.UserAvatar src={user.avatar_url} />
            <S.UserLoginName>{user.login}</S.UserLoginName>
            <S.UserLoginName>ID: {user.id}</S.UserLoginName>
          </S.AvatarInfo>
          <S.UserNameInfoContainer>
            <S.Username>{user.name}</S.Username>
            <S.UserLocation>
              <HiOutlineLocationMarker
                size={24}
                color="var(--danger-color)"
                style={{
                  marginRight: 5
                }}
              />
            Localização: {user.location}
            </S.UserLocation>
            <S.UserFollowers>
              <GiShadowFollower
                size={24}
                color="var(--danger-color)"
                style={{
                  marginRight: 5
                }}
              />
            Seguidores: {user.followers}
            </S.UserFollowers>
            <S.UserPublicRepos>
              <GoRepo
                size={24}
                color="var(--danger-color)"
                style={{
                  marginRight: 5
                }}
              />
            Repositórios públicos: {user.public_repos}
            </S.UserPublicRepos>
          </S.UserNameInfoContainer>
        </S.HeaderInfo>
        <S.RepositoriesContainer>
          <S.RepositoryTitle>
            Repositórios:
          </S.RepositoryTitle>
          <ul>
            {repositories.map(repo => (
              <li key={repo.id}>
                <S.RepoButton>
                  <a href={repo.html_url} target="blanck">
                    <S.RepoName>
                      <strong>Nome:</strong>
                      <br />
                      {repo.name}</S.RepoName>
                    <S.RepoLanguage>
                      <strong>
                        Linguagem:
                      </strong>
                      <br />
                      {repo.language ? repo.language : 'Linguagem não especificadas!'}
                    </S.RepoLanguage>
                    <S.RepoDescription>
                      <strong>
                        Descrição:
                      </strong>
                      <br />
                      {repo.description ? repo.description : 'Sem Descrição!'}
                    </S.RepoDescription>
                    <S.RepoCreatedAt>
                      <strong>
                        Data de criação:
                    </strong>
                      <br />
                      {format(new Date(repo.created_at), 'dd/MM/yyyy')}
                    </S.RepoCreatedAt>
                    <S.RepoLastCommit>
                      <strong>
                        Último commit:
                    </strong>
                      <br />
                      {format(new Date(repo.updated_at), 'dd/MM/yyyy')}
                    </S.RepoLastCommit>
                    <FiArrowRight
                      size={24}
                      color="var(--danger-color)"
                    />
                  </a>
                </S.RepoButton>
              </li>
            ))}
          </ul>
        </S.RepositoriesContainer>
      </S.Container>
      <S.Swagger></S.Swagger>
    </>
  )
};

export default UserInfo;
