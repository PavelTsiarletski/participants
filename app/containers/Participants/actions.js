import { HANDLE_ONLINE } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function handleOnline(i, status) {
  return {
    type: HANDLE_ONLINE,
    i,
    status
  };
}
