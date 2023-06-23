import { IAppState, IAction } from '../interfaces';

export const initialState: IAppState = {
  token: null,
}

export const reducer = (state: IAppState, action: IAction) => {
  switch(action.type) {
    default: 
      return state;
  }
}