import React, { FC, ReactNode, createContext, useState } from "react";
import { User } from "../../Interfaces";

interface ProviderProps {
  children: ReactNode;
}

type Props = {
  user: User;
  actions: {
    saveUser: (user: User) => void,
  };
};

export const initialState = {
  name: '',
  surname: '',
  preferedTopic: '',
  img: '',
};

export const initialActions = {
  saveUser: () => null,
};

export const UserContext = createContext<Props>({ user: initialState, actions: initialActions });
UserContext.displayName = 'UserContext';

export const UserContextProvider: FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(initialState);

  const saveUser = (user: User) => {
    const newUser: User = {
      name: user.name,
      surname: user.surname,
      preferedTopic: user.preferedTopic,
      img: user.img,
    };
    setUser(newUser);
  };

  const enchancedActions = {
    saveUser,
  };

  return (
    <UserContext.Provider value={{ user, actions: enchancedActions }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;