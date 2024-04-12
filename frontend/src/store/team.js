import { fetch } from "./csrf";

const GET_TEAMS = "teams/getSponsors";

const getTeams = (teams) => {
  return {
    type: GET_TEAMS,
    payload: teams,
  };
};

export const fetchTeams = () => async (dispatch) => {
  const teams = await fetch("api/team");
  return dispatch(getTeams(teams));
};

const initialState = {};

const teamReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_TEAMS:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    default:
      return state;
  }
};

export default teamReducer;
