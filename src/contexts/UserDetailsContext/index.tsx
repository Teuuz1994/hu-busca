import { createContext, useContext, FC, useState } from 'react';

export interface IUserProps {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  followers: number;
  public_repos: number;
}

interface IUserDetailContext {
  saveUser(user: IUserProps): void;
  getUser(): IUserProps;
  saveUsersInVector(user: IUserProps): void;
  rescueUsersInVector(): IUserProps[];
}

const UserDetailContext = createContext({} as IUserDetailContext)

export const UserDetailProvider: FC = ({ children }) => {

  const saveUser = (user: IUserProps) => {
    const storageUser = JSON.parse(String(localStorage.getItem('@HUbusca:user')))

    if (storageUser) {
      localStorage.removeItem('@HUbusca:user');
    }

    localStorage.setItem('@HUbusca:user', JSON.stringify(user));
  };

  const getUser = () => {
    const user = JSON.parse(String(localStorage.getItem('@HUbusca:user'))) as IUserProps;

    return user;
  };

  const saveUsersInVector = (user: IUserProps) => {
    let users = [];

    const usersStorage = JSON.parse(String(
      localStorage.getItem('@HUbusca:storageUsers')
    ))

    if (usersStorage) {
      users.push(...usersStorage, user);
      localStorage.setItem('@HUbusca:storageUsers', JSON.stringify(users));
    } else {
      users.push(user)
      localStorage.setItem('@HUbusca:storageUsers', JSON.stringify(users));
    }
  }

  const rescueUsersInVector = () => {
    const users = JSON.parse(String(localStorage.getItem('@HUbusca:storageUsers'))) as IUserProps[]

    return users
  }

  return (
    <UserDetailContext.Provider value={{ saveUser, getUser, saveUsersInVector, rescueUsersInVector }}>
      {children}
    </UserDetailContext.Provider>
  )
};

export const useDetailUser = () => {
  const { ...context } = useContext(UserDetailContext);

  return context;
};
