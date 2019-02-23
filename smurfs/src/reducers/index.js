/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import { FETCHING, FETCHED, ERROR, SAVING, SAVED } from '../actions/index';

const inistialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	error: null
};

export const smReducer = (state = inistialState, action) => {
	switch (action.type) {
		case FETCHING:
			return { ...state, fetchingSmurfs: true };
		case FETCHED:
			return { ...state, fetchingSmurfs: false, smurfs: action.payload };
		case SAVING:
			return { ...state, addingSmurf: true };
		case SAVED:
			return { ...state, addingSmurf: false, smurfs: action.payload };
		case ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};
