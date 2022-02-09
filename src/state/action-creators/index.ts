import { Dispatch } from "redux"
import { ActionType } from "../action-types/index"
import { Action } from "../actions/index"

export const showsDetailSuccess = (data:object)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.SHOW_SUCCESS,
            data:data
        })
    }
}

export const showsDetailError = ()=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.SHOW_ERROR,
        })
    }
}

export const episodesSuccess = (data:object[])=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.EPISODE_SUCCESS,
            data:data
        })
    }
}
export const episodesError = ()=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.EPISODE_ERROR,
        })
    }
}