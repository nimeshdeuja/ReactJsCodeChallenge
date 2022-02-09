import styled from "styled-components";
import Theme from "./theme";

export const FooterStyled = styled.div`
    border-top:1px solid rgba(${Theme.secondary},0.3);
    min-height:60px;
    max-height:60px;
    display:flex;
    justify-content:flex-start;
    align-items: center;
    align-self: center;
    color:rgba(${Theme.text},0.8);
    ${Theme.primaryFont};
    ${Theme.fSM};

    width:${Theme.container};
    padding:${Theme.gXL};
    ${Theme.mMX_LG}{
        width:100%;
      }
`