import {fetch} from "./csrf";;

const GET_SPONSORS = 'sponsors/getSponsors';

const getSponsors = () => {
    return {
        type: GET_SPONSORS,
    };
};

export const fetchSponsors = () => async (dispatch) => {
    const response = await fetch('/api/sponsors', {
        method: "GET",
    });
    dispatch(getSponsors())
    console.log("response", response)
    return response
}

