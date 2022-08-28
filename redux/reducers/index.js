
import {combineReducers} from 'redux';
import { fetch } from './auth';
import { fetchRegister } from './auth';


const rootReducer = combineReducers({
  auth: fetch,
  auth: fetchRegister
//   movies: Movies,
//   upcomingmovies: Upcoming,
});

export default rootReducer;
//TES COMMENTAR