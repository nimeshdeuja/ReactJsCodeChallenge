
import { ActionType } from '../action-types';

interface ShowsDetailSuccessAction {
    type: ActionType.SHOW_SUCCESS;
    data?: object
}
interface EpisodeSuccessAction {
    type: ActionType.EPISODE_SUCCESS;
    data?: object[]
}
interface ShowErrorAction {
    type: ActionType.SHOW_ERROR;
}
interface EpisodeErrorAction {
    type: ActionType.EPISODE_ERROR;
}
interface TabsAction {
    type: ActionType.TABS;
    data: number
}
interface FilterAction {
    type: ActionType.FILTER;
    data: Object[]
}
export type DataTypeEpi = {
        isLoading:boolean,
        reload:boolean,
        list:Object[]
}
export type DataTypeSho = {
        isLoading:boolean,
        reload:boolean,
        detail:object | null
}
export type DataTypeTabs = {
    season:number,
    totalSeason:Object[],
    current?:Object[]
}

export type Action = ShowsDetailSuccessAction | ShowErrorAction | EpisodeSuccessAction | EpisodeErrorAction | TabsAction | FilterAction