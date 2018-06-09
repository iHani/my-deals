import * as notesAPI from '../utils/notesAPI';
export const HELLO_REDUX = 'HELLO_REDUX';

export const helloRedux = () => (dispatch) => (
  notesAPI
  .getHelloNote()
  .then(note => {
    dispatch(receivedNote(note))
  })
);

export const receivedNote = (note) => ({
  type: HELLO_REDUX,
  note
});
