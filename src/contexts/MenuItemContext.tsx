import { createContext, useContext, useState } from 'react';
import { IMenuItemContext, IMenuItemProvider } from '../interfaces';

const MenuItemContext = createContext({} as IMenuItemContext);

export function useMenuItem() {
  return useContext(MenuItemContext);
}

export function MenuItemProvider({children}: IMenuItemProvider) {
  const [activeItem, setActiveItem] = useState<number>(0);
  const value = { activeItem, setActiveItem };

  return (
    <MenuItemContext.Provider value={value}>
      {children}
    </MenuItemContext.Provider>
  )
}