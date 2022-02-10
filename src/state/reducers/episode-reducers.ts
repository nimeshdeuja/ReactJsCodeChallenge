import { UpdateObject } from "../../shared/utility";
import { ActionType } from "../action-types";
import { Action, DataTypeEpi } from "../actions";

const initialState = {
    isLoading:true,
    reload:true,
    list:[]
}

const episodeReducers = (data:DataTypeEpi = initialState, action:Action)=>{
    switch(action.type){
        case ActionType.EPISODE_SUCCESS:
            return UpdateObject(data, {
                list:action.data,
                isLoading:false,
                reload:false
            });
        case ActionType.EPISODE_ERROR:
            return UpdateObject(data, {
                isLoading:false,
                reload:false
            });
        default:
            return data;
    }
}

export default episodeReducers