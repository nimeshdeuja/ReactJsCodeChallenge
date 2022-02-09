import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from 'redux';

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

  return <div>
    <div onClick={episodeDetailClickHandler}>push</div>
    Show Page
  </div>;
};

export default Show;
