import { UpdateObject } from "../../shared/utility";
import { ActionType } from "../action-types";
import { Action, DataTypeEpiDetail } from "../actions";

const initialState = {
    detail:null
}

const episodeDetailReducers = (data:DataTypeEpiDetail = initialState, action:Action)=>{
    switch(action.type){
        case ActionType.DETAIL_SUCCESS:
            return UpdateObject(data, {
                detail:action.detail,
            });
        case ActionType.DETAIL_ERROR:
            return data;
        default:
            return data;
    }
}

export default episodeDetailReducers