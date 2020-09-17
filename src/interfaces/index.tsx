export interface IState {
  rockets: Array<any>;
  dragons: Array<any>;
}

export interface IAction {
  type: string;
  payload: Array<any>;
}
