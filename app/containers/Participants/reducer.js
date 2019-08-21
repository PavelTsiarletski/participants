
import produce from 'immer';
import { HANDLE_ONLINE } from './constants';

// The initial state of the App
export const initialState = {
  online: {
    0: true,
  },
};

/* eslint-disable default-case, no-param-reassign */
const ParticipantsReduser = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HANDLE_ONLINE:
        draft.online[i] = !action.status;
        break;
    }
  });

export default ParticipantsReduser;
