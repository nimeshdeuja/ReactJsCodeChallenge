import { combineReducers } from "redux";
import episodeReducers from "./episode-reducers";
import showReducers from "./show-reducers"
import tabReducers from "./tabs-reducers";

const reducers = combineReducers({
    shows:showReducers,
    episodes:episodeReducers,
    tabs:tabReducers
})
export default reducers