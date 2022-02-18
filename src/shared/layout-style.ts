import styled from "styled-components";
import Theme from "./theme";


export const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;

    .container{
        align-self: center;
        width:${Theme.container};
        padding:${Theme.gXL};
        ${Theme.mMX_LG}{
            width:100%;
          }
    }
`


export const Box = styled.div`
    background:rgba(${Theme.offWhite}, 1);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(${Theme.black},0.25); 
    box-shadow: 0px 0px 10px 0px rgba(${Theme.black},0.25); 
    padding:${Theme.gMD}; 
    ${Theme.fSM};

    .smallImage{
        width:100%;
        border:1px solid rgba(${Theme.black},0.0625);
    }
`