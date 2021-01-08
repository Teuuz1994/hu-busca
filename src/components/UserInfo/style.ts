import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 960px;
  max-height: 90%;
  margin: auto;
`;

export const Swagger = styled.div`
  padding: 50px;
`;

export const HeaderInfo = styled.div`
  border-radius: 8px;
  box-shadow: 2px 5px 5px var(--shadow-color);
  width: 100%;
  padding: 15px;
  margin-top: 10px;
  display: flex;
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
`;

export const UserAvatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const UserLoginName = styled.span`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  margin: 9px 0 0 36px;
`;

export const Username = styled.h2`
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  margin-left: 160px;
  text-align: center;
`;

export const ImageLogo = styled.img`
  width: 25rem;
  height: 25rem;
  margin-left: 15rem;
`;

export const ImageContainer = styled.div`
  background: #474545;
  width: 100%;
`;

export const UserNameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserLocation = styled.span`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  margin-top: 15px;
  text-align: start;
  color: var(--dark-color);
  margin-left: 160px;
`;

export const UserFollowers = styled(UserLocation)``;

export const UserPublicRepos = styled(UserLocation)``;

export const RepositoriesContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 5px 5px var(--shadow-color);
  padding: 15px;
  margin-top: 15px;

  ul {
   li {
      list-style: none ;
    }
  }
`;

export const RepositoryTitle = styled.h2`
  margin: 10px 0 15px 0;
`;

export const RepoButton = styled.button`
  background: transparent;
  width: 100%;
  height: 5.5rem;
  padding: 5px;
  border: 2px solid var(--secundary-color);
  transition: border 0.1s;
  margin-bottom: 5px;

  &:hover {
    border: 2px solid var(--primary-color);
  }

  a {
    background: transparent;
    outline: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--dark-color);
    text-decoration: none;
  }
`;

export const RepoName = styled.span``;

export const RepoLanguage = styled.span``;

export const RepoDescription = styled.span``;

export const RepoCreatedAt = styled.span``;

export const RepoLastCommit = styled.span``;

