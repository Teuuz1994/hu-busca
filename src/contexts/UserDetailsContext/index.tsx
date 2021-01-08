import { createContext, useContext, FC } from 'react';

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

  return (
    <UserDetailContext.Provider value={{ saveUser, getUser }}>
      {children}
    </UserDetailContext.Provider>
  )
};

export const useDetailUser = () => {
  const { ...context } = useContext(UserDetailContext);

  return context;
};
