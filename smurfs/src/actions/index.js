/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => (dispatch) => {
	dispatch({ type: FETCHING });
	axios
		.get(`http://localhost:3333/smurfs`)
		.then((response) => {
			console.log('FETCHED: ', response);
			dispatch({
				type: FETCHED,
				payload: response.data
			});
		})
		.catch((err) => {
			dispatch({
				type: ERROR,
				payload: 'SMURF ERROR!!',
				err
			});
		});
};

export const saveSmurf = (smurfs) => (dispatch) => {
	dispatch({ type: SAVING });
	axios
		.post(`http://localhost:3333/smurfs`, smurfs)
		.then((response) => {
			dispatch({
				type: SAVED,
				payload: response.data
			});
		})
		.catch((err) => {
			dispatch({
				type: ERROR,
				payload: 'SMURF ERROR!!',
				err
			});
		});
};
