import { ReactNode } from 'react';

export interface IMenuItemProps {
  isActive: boolean;
}

export interface IMenuItemContext {
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
}

export interface IMenuItemProvider {
  children: ReactNode;
}