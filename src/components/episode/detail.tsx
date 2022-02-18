import { EffectCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { get } from '../../server-requests/server-requests';
import Layout from '../../shared/layout';
import { Box } from '../../shared/layout-style';
import { createMarkup } from '../../shared/utility';
import { actionCreators } from '../../state';
import { InnerLayout } from '../show/show-styles';
import { BreadcrumbsStyled } from './episode-detail-styles';

const Detail = () => {
  let params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { episodeDetailSuccess, episodeDetailError } = bindActionCreators(actionCreators, dispatch);
  const data = useSelector((state:any)=>state);

  useEffect((): ReturnType<EffectCallback> =>{
    let isMounted = true;
      get({url:`https://api.tvmaze.com/episodes/${params.id}?embed=show`})
      .then((data)=>episodeDetailSuccess(data))
      .catch((state)=>episodeDetailError(state))
    return (): void => {
      isMounted = false;
    }
  },[])

  let titleElement, imageElement, summaryElement, number, season;
  if(data.episode.detail){
    let details = data.episode.detail;
    titleElement = details.name
    imageElement = details.image && <img src={details.image.medium} alt={details.name} />
    summaryElement = <article dangerouslySetInnerHTML={createMarkup(details.summary)} />
    number = details.number
    season = details.season
  }

  // Show Details 
  let showNameElement, showImageElement, rating, genres, language, network, country, type, premiered, officialSite
  if(data.episode.detail){
    let shows = data.episode.detail._embedded.show;
    showNameElement = shows.name;
    showImageElement = <img src={shows.image.medium} alt={shows.name} className='smallImage' />;
    rating = shows.rating.average;
    genres = shows.genres.map((item:any)=>`${item}, `);
    language = shows.language;
    network = shows.network.name;
    country = shows.network.country.name;
    type = shows.type;
    premiered = shows.premiered;
    officialSite = shows.officialSite
  }

  return <Layout>
          <>
          <BreadcrumbsStyled>
            <span onClick={()=>navigate('/')}>{showNameElement}</span> &gt; {titleElement}
          </BreadcrumbsStyled>
          <h2>{titleElement}</h2>
          <InnerLayout> 
            <aside className="leftSide">
              <div>
                {imageElement}
                {summaryElement}
              </div>
              <p><b>Season:</b> {number}, <b>Episode:</b> {season}</p>
            </aside>
           <aside className="rightSide">
           <h3>{showNameElement}</h3>
              <Box>
                {showImageElement}
                <p><b>Rating:</b> {rating}</p>
                <p><b>Genres:</b> {genres}</p>
                <p><b>Language:</b> {language}</p>
                <p><b>Type:</b> {type}</p>
                <p><b>Network:</b> {network}</p>
                <p><b>Country:</b> {country}</p>
                <p><b>Premiered:</b> {premiered}</p>
                <p><b>Official Site:</b> {officialSite}</p>
              </Box>
            </aside>
          </InnerLayout>
          </>
          </Layout>;
};

export default Detail;
