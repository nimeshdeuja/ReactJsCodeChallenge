import { EffectCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';

import { get } from "../../server-requests/server-requests";
import Layout from "../../shared/layout";
import { createMarkup } from "../../shared/utility";
import { actionCreators } from "../../state";
import Episodes from "../episode";
import { InnerLayout } from "./show-styles";

const Show = () => {
  const dispatch = useDispatch();

  const { showsDetailSuccess, showsDetailError } = bindActionCreators(actionCreators, dispatch);
  const data = useSelector((state:any)=>state);
  console.log("🚀 ~ file: index.tsx ~ line 16 ~ Show ~ data", data)

  useEffect((): ReturnType<EffectCallback> =>{
    let isMounted = true;
    if(data.shows.reload){
      get({url:'https://api.tvmaze.com/shows/6771'})
      .then((data)=>showsDetailSuccess(data))
      .catch((state)=>showsDetailError(state))
    }
    return (): void => {
      isMounted = false;
    }
  },[data.shows.reload])

  let titleElement, imageElement, summaryElement, episodesList;
  if(data.shows.detail) {
    let details = data.shows.detail;
    titleElement = <h2>{details.name}</h2>
    imageElement = <img src={details.image.medium} alt={details.name} />
    summaryElement = <article dangerouslySetInnerHTML={createMarkup(details.summary)} />
    episodesList = <Episodes id={details.id}/>
  }

  return <Layout>
    <>
    {titleElement}
      <InnerLayout> 
        <aside className="leftSide">
          <div>
            {imageElement}
            {summaryElement}
          </div>
        </aside>
        <aside className="rightSide">
          {episodesList}
        </aside>
      </InnerLayout>
      </>
  </Layout>;
};

export default Show;
