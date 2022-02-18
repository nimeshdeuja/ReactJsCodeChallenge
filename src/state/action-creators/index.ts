import { Dispatch } from "redux"
import { ActionType } from "../action-types/index"
import { Action } from "../actions/index"

export const showsDetailSuccess = (data:any)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.SHOW_SUCCESS,
            data:data
        })
    }
}

export const showsDetailError = (state:string|number) =>{
    return (dispatch:Dispatch<Action>)=>{
        console.error(`Error on getting show detail: ${state}`);
        dispatch({
            type:ActionType.SHOW_ERROR,
        })
    }
}

export const episodesSuccess = (data:any)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.EPISODE_SUCCESS,
            data:data
        })
    }
}
export const episodesError = (state:string|number)=>{
    return (dispatch:Dispatch<Action>)=>{
        console.error(`Error on getting episodes list: ${state}`)
        dispatch({
            type:ActionType.EPISODE_ERROR,
        })
    }
}


export const tabsChange = (data:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.TABS,
            data:data
        })
    }
}

export const currentEpisodes = (list:Object[])=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.FILTER,
            data:list
        })
    }
}


export const episodeDetailSuccess = (data:any)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.DETAIL_SUCCESS,
            detail:data
        })
    }
}
export const episodeDetailError = (state:string|number)=>{
    return (dispatch:Dispatch<Action>)=>{
        console.error(`Error on getting episode detail: ${state}`)
        dispatch({
            type:ActionType.DETAIL_ERROR,
        })
    }
}