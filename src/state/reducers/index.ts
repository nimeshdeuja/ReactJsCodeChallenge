import { combineReducers } from "redux";
import episodeReducers from "./episodeReducers";
import showReducers from "./showReducers"

const reducers = combineReducers({
    shows:showReducers,
    episodes:episodeReducers
})
export default reducers