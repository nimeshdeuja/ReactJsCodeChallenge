import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function App() {

  const dispatch = useDispatch();

  const { showsDetailSuccess, showsDetailError, episodesSuccess } = bindActionCreators(actionCreators, dispatch);
  const data1 = useSelector((state:any)=>state);
  console.log("🚀 ~ file: App.tsx ~ line 12 ~ App ~ data1", data1)

  return (
    <div className="App">
        <div onClick={()=>showsDetailSuccess({name:'deuja'})}>clicked</div>
        <div onClick={()=>episodesSuccess([{name:'nimesh', surname:'deuja', age:80}])}>clicked</div>
    </div>
  );
}

export default App;
