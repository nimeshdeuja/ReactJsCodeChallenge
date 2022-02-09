import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from 'redux';
import Layout from "../../shared/layout";

import { actionCreators } from "../../state";

const Show = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { showsDetailSuccess, showsDetailError, episodesSuccess } = bindActionCreators(actionCreators, dispatch);
  const data1 = useSelector((state:any)=>state);


  useEffect(()=>{

  },)

  const episodeDetailClickHandler =()=>{
    navigate('/episode/657308')
  }

  return <Layout>
      <div style={{height:2000}}>   
      <div onClick={episodeDetailClickHandler}>push</div>
      Show Page
      </div>
  </Layout>;
};

export default Show;
