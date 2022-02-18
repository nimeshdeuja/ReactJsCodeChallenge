import styled from "styled-components";
import Theme from "../../shared/theme";

export const InnerLayout = styled.div`
    display: flex;
    flex-direction: row;

    .leftSide{
        flex-grow:1;
        margin-right:${Theme.gXL};
        margin-bottom:unset;


        >div{
            display: flex;
            flex-direction: row;

            >article >p {
                margin-left:${Theme.gMD};
                flex-grow:1;
                font-family:${Theme.secondaryFont}!important;
                ${Theme.fDF};
            }
        }
        >p{
            margin-top:${Theme.gMD};
        }
    }

    .rightSide{
        width:280px;
        min-width: 280px;
    }

    ${Theme.mMX_SM}{
        flex-direction: column;

        .leftSide{
            margin-right:unset;
            margin-bottom:${Theme.gXL};
        }

        .rightSide{
            width:100%;
        }
      }
`