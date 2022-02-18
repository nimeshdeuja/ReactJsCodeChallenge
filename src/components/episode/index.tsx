import { EffectCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { get } from '../../server-requests/server-requests';
import { Box } from '../../shared/layout-style';
import { actionCreators } from '../../state';
import { Tabs } from './episode-styles';

type Props = {
  id:number
}

const Episodes = ({id}:Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { episodesSuccess, episodesError, tabsChange, currentEpisodes } = bindActionCreators(actionCreators, dispatch);
  const data = useSelector((state:any)=>state);

  useEffect((): ReturnType<EffectCallback> =>{
    let isMounted = true;
    if(data.episodes.reload){
      get({url:`https://api.tvmaze.com/shows/${id}/episodes`})
      .then((data)=>episodesSuccess(data))
      .catch((state)=>episodesError(state))
    }
    return (): void => {
      isMounted = false;
    }
  },[data.episodes.reload])


  useEffect(() =>{
    if(!data.episodes.reload && data.episodes.list.length>0 && data.tabs.season){
      currentEpisodes(data.episodes.list)
    }
  },[data.tabs.season, data.episodes.reload])


  const episodeDetailClickHandler =(id:number)=>navigate(`/episode/${id}`)

  let TabsElement, EpisodesElement
  if(data.tabs.season && data.tabs.totalSeason.length>0 && data.tabs.current.length>0){
    TabsElement = data.tabs.totalSeason.map((item:any)=> <span className={item.id === data.tabs.season ?'selected':''} key={item.id} onClick={()=>tabsChange(item.id)}>{item.name}</span>)
    EpisodesElement = data.tabs.current.map((item:any)=> <span key={item.id} onClick={()=>episodeDetailClickHandler(item.id)}><b>{item.number}.</b> <span>{item.name}</span></span>)
  }
    
  return <>
      <h3>Episodes</h3>
        <Box>
          <Tabs>
            <div className='tabs'>
              {TabsElement}
            </div>
            <div className='list'>{EpisodesElement}</div>
          </Tabs>
        </Box>
    </>;
};

export default Episodes;
