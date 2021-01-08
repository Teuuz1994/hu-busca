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

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;

  @media(max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const UserAvatar = styled.img`
  width: 150px;
  border-radius: 50%;

  @media(max-width: 768px) {
    width: 75px;
  }
`;

export const UserLoginName = styled.span`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  margin: 9px 0 0 36px;

  @media(max-width: 768px) {
    margin: 10px 0 10px 0;
    line-height: 5px;
  }
`;

export const Username = styled.h2`
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  margin-left: 160px;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 1.5rem;
    margin: 10px auto;
  }
`;

export const ImageLogo = styled.img`
  width: 25rem;
  height: 25rem;
  margin-left: 15rem;

  @media(max-width: 768px) {
    width: 100%;
    height: 15rem;
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  background: #474545;
  width: 100%;
`;

export const UserNameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    justify-content: center;
  }
`;

export const UserLocation = styled.span`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  margin-top: 15px;
  text-align: start;
  color: var(--dark-color);
  margin-left: 160px;

  @media(max-width: 768px) {
    font-size: 0.8rem;
    margin: 0 0 0 0;
  }
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

    @media(max-width: 768px) {
      height: 4.5rem;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
    }
  }

  @media(max-width: 768px) {
    margin-top: 16px;
    height: 14rem;
    padding: 10px;
    line-height: 18px;
    display: flex;
    flex-direction: column;
  }
`;

export const RepoName = styled.span`
  font-family: 'Roboto', sans-serif;

  @media(max-width: 768px) {
    text-align: justify;
  }
`;

export const RepoLanguage = styled(RepoName)``;

export const RepoDescription = styled(RepoName)``;

export const RepoCreatedAt = styled(RepoName)``;

export const RepoLastCommit = styled(RepoName)``;

