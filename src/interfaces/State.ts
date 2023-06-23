import { ReactNode } from 'react';

export interface IStateContext {
  state: IAppState;
  dispatch: React.Dispatch<IAction>;
}

export interface IStateProvider {
  children: ReactNode;
}

export interface IAppState {
  token: string | null;
}

export interface IAction {
  type: string;
  payload: string;
}