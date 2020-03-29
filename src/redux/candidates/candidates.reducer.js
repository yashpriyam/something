import { CandidatesTypes } from './candidates.types';

const INITIAL_STATE = {
  monsters: null
};

const candidatesReducer = (state = INITIAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case CandidatesTypes.CANDIDATES:
      return {
        ...state,
        monsters: action.payload
      };
    default:
      return state;
  }
};

export default candidatesReducer;