import styled from 'styled-components'

import Button from '../../components/Button'

import backgroundImg from '../../assets/background-home.svg';
import logo from '../../assets/logo.svg';

export const BackgroundImageContent = styled.div`
  background: url(${backgroundImg}) no-repeat 101% 1%;
  width: 100%;
  height: 100%;

  @media(max-width: 768px) {
    background: url(${logo}) no-repeat 50% 1%;
    background-size: 300px 300px;
  }
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

  @media(max-width: 768px) {
    padding: 10px;
    display: block;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;

  @media(max-width: 768px) {
    flex-direction: column;
  }
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

  @media(max-width: 768px) {
    width: 16rem;
    margin-top: 0.5rem;
  }
`;

export const Title = styled.h1`
  margin: 12rem 21rem 1.6rem 0;

  @media(max-width: 768px) {
    font-size: 1.1rem;
    display: flex;
    margin: 17rem 0rem 1rem 1rem;
    width: 100%;
  }
`;

export const ExtraStyleButton = styled(Button)`
  width: 200px;
  height: 47px;

  @media(max-width: 768px) {
    width: 15rem;
    height: 2.5rem;
    margin-top: 1rem;
    margin-left: -30px;
  }
`;

export const ShowMessageError = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  margin: 0.5rem 54rem 0 0;
  color: var(--danger-color);

  @media(min-width: 320px) and (max-width: 374px) {
    font-size: 0.6rem;
    display: flex;
    text-align: center;
    margin: 10px 38%;
  }

  @media(min-width: 375px) and (max-width: 424px) {
    font-size: 0.6rem;
    display: flex;
    text-align: center;
    margin: 10px 41%;
  }

  @media(min-width: 425px) and (max-width: 767px) {
    font-size: 0.6rem;
    display: flex;
    text-align: center;
    margin: 10px 42%;
  }

  @media(min-width: 768px) and (max-width: 968px) {
    font-size: 0.6rem;
    display: flex;
    text-align: center;
    margin: 10px 45%;
  }
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

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  @media(max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const UserLogin = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  color: var(--secundary-color);
  margin-right: 20px;
  line-height: 20px;

  @media(max-width: 768px) {
    font-size: 0.8rem;
    margin: 0;
  }
`;

export const Username = styled(UserLogin)``;

export const UserLocation = styled(UserLogin)``;

export const UserBoxDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const UserBoxContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionUserName = styled(UserLogin)`
  font-size: 1rem;
  color: var(--primary-color);

  @media(max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const DescriptionUserLogin = styled(DescriptionUserName)``;

export const DescriptionUserLocation = styled(DescriptionUserName)``;

export const NavigationButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;
