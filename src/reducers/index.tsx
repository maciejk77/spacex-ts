import { IState, IAction } from '../interfaces';

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_ROCKETS':
      return { ...state, rockets: [...state.rockets, action.payload] };
    case 'FETCH_DRAGONS':
      return { ...state, dragons: [...state.dragons, action.payload] };
    default:
      return state;
  }
};
