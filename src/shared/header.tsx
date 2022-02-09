import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "./headerStyle";

const Header = () => {
    let navigate = useNavigate();
  return <HeaderStyled><div>
  <img onClick={()=>navigate('/')} src='https://static.tvmaze.com/images/tvm-header-logo.png' alt='tv maze' />
</div></HeaderStyled>;
};

export default Header;
