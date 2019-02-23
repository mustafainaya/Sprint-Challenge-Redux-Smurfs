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

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const SAVING_SMURFS = 'SAVING_SMURFS';
export const SMURF_SAVED = 'SMURF_SAVED';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => (dispatch) => {
	dispatch({ type: FETCHING_SMURFS });
	axios
		.get(`http://localhost:3333/smurfs`)
		.then((response) => {
			console.log('SMURFS_FETCHED: ', response);
			dispatch({
				type: SMURFS_FETCHED,
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
	dispatch({ type: SAVING_SMURFS });
	axios
		.post(`http://localhost:3333/smurfs`, smurfs)
		.then((response) => {
			dispatch({
				type: SMURF_SAVED,
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
