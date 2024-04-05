import { fetch } from "./csrf";

const GET_SPONSORS = "sponsors/getSponsors";

const getSponsors = (sponsors) => {
  return {
    type: GET_SPONSORS,
    payload: sponsors,
  };
};

export const fetchSponsors = () => async (dispatch) => {
  const sponsors = await fetch("/api/sponsor");
  return dispatch(getSponsors(sponsors));
};

const initialState = {};

const sponsorReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_SPONSORS:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    default:
      return state;
  }
};

export default sponsorReducer;
