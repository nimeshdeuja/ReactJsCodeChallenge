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
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 15%);
    padding:${Theme.gMD};
`