import styled from "styled-components";
import Theme from "./theme";

export const HeaderStyled = styled.header`
    background:rgba(${Theme.secondary},1);
    min-height:80px;
    max-height:80px;
    display:flex;
    justify-content:center;
    align-items: center;

    div{
        height:100%;
        display:flex;
        justify-content:flex-start;
        align-items: center;
        width:${Theme.container};
        padding:${Theme.gXL};
        ${Theme.mMX_LG}{
            width:100%;
          }

        img{
            height:50px;
        }
    }
`