import { getTotalSeason, UpdateObject } from "../../shared/utility";
import { ActionType } from "../action-types";
import { Action, DataTypeTabs } from "../actions";

const initialState = {
    season:1,
    totalSeason:[],
    current:[]
}

const tabReducers = (data:DataTypeTabs = initialState, action:Action)=>{
    switch(action.type){
        case ActionType.TABS:
            return UpdateObject(data, {
                season:action.data,
            });
            case ActionType.FILTER:
                return UpdateObject(data, {
                    current:action.data.filter((item:any)=>item.season === data.season),
                    totalSeason:getTotalSeason(action.data),
                });
        default:
            return data;
    }
}

export default tabReducers