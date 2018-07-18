import {
  HELLO_REDUX,
} from '../actions/notes';

const deals = [
  { dealId: 1, dealCategory: 'Travel', dealPartner: 'AlTayyar', dealPrice: 200, bgColor: 'bgRed' },
  { dealId: 2, dealCategory: 'Hotel', dealPartner: 'Ritz', dealPrice: 2500, bgColor: 'bgBlue' },
  { dealId: 3, dealCategory: 'Hotel', dealPartner: 'Hilton', dealPrice: 1500, bgColor: 'bgBlue' },
  { dealId: 4, dealCategory: 'Rent', dealPartner: 'Theeb', dealPrice: 80, bgColor: 'bgOrange' },
];

export default (state = deals, action) => {
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
