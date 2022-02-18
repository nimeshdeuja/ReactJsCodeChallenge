import styled from "styled-components";
import Theme from "../../shared/theme";

export const BreadcrumbsStyled = styled.div`
    padding:${Theme.gSM};
    margin-bottom:${Theme.gXL};
    background:rgba(${Theme.offWhite}, 1);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(${Theme.black},0.25); 
    box-shadow: 0px 0px 5px 0px rgba(${Theme.black},0.25); 
    >span{
        color:rgba(${Theme.primary},1);
        cursor:pointer;
        :hover{
            color:rgba(${Theme.black},1);
        }
    }
`