import styled from 'styled-components'

import Button from '../../components/Button'

import backgroundImg from '../../assets/background-home.svg'

export const BackgroundImageContent = styled.div`
  background: url(${backgroundImg}) no-repeat 101% 1%;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  background: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: auto;
  max-width: 960px;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

export const SearchUserInput = styled.input`
  padding: 10px;
  width: 20rem;
  height: 3rem;
  border-radius: 8px;
  border: 2px solid var(--dark-color);
  outline: none;
  margin-right: 1.5rem;
  font-size: 12pt;

  &:focus {
    border: 2px solid var(--primary-color);
  }
`;

export const Title = styled.h1`
  margin: 12rem 21rem 1.6rem 0;
`;

export const ExtraStyleButton = styled(Button)`
  width: 200px;
  height: 47px;
`;

export const ShowMessageError = styled.span`
  font: 0.9rem 'Roboto',sans-serif;
  margin: 0.5rem 33rem 0 0;
  color: var(--danger-color);
`;

export const UserBoxInfo = styled.div`
  height: 100%;
  max-height: 8rem;
  width: 100%;
  max-width: 35rem;
  padding: 10px;
  box-shadow: 2px 5px 5px var(--shadow-color);
  margin: 5rem 23rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 5px;
  transition: border .1s;

  &:hover {
    border: 2px solid var(--primary-color);
  }
`;

export const UserAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  transition: border .1s;

  &:hover {
    border: 2px solid var(--primary-color);
  }
`;

export const UserLogin = styled.span`
  font: 0.9rem 'Roboto', sans-serif;
  color: var(--secundary-color);
  margin-right: 20px;
  line-height: 20px;
`;

export const Username = styled(UserLogin)``;

export const UserLocation = styled(UserLogin)``;

export const UserBoxDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserBoxContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionUserName = styled(UserLogin)`
  font-size: 1rem;
  color: var(--primary-color);
`;

export const DescriptionUserLogin = styled(DescriptionUserName)``;

export const DescriptionUserLocation = styled(DescriptionUserName)``;

export const NavigationButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;
