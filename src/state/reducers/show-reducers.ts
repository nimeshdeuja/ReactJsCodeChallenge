import { UpdateObject } from "../../shared/utility";
import { ActionType } from "../action-types";
import { Action, DataTypeSho } from "../actions";

const initialState = {
    isLoading:true,
    reload:true,
    detail:null
}

const showReducers = (data:DataTypeSho = initialState, action:Action)=>{
    switch(action.type){
        case ActionType.SHOW_SUCCESS:
            return UpdateObject(data, {
                detail:action.data,
                isLoading:false,
                reload:false
            });
        case ActionType.SHOW_ERROR:
            return UpdateObject(data, {
                isLoading:false,
                reload:false
            });
        default:
            return data;
    }
}

export default showReducers