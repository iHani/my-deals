import {
  HELLO_REDUX,
} from '../actions/notes';

const notesDefaultState = { note: '...' };

export default (state = notesDefaultState, action) => {
  const { note } = action;

  switch (action.type) {
    case HELLO_REDUX :
    return {
      ...state,
      note
    };

    default:
    return state;
  }
};
