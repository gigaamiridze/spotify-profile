import { ReactNode } from 'react';

export interface IMenuItemProps {
  isActive: boolean;
}

export interface IMenuItemContext {
  activeItem: number | null;
  setActiveItem: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface IMenuItemProvider {
  children: ReactNode;
}
