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