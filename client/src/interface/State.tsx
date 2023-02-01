import User from './User';

interface State {
  loading: boolean,
  results: User[],
  errorMessage: string,
}

export default State;
