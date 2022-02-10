import styled from "styled-components";
import Theme from "../../shared/theme";

export const Tabs = styled.div`
    display:flex;
    flex-direction: column;

    >div.tabs {
        border-bottom:1px solid rgba(${Theme.primary},1)!important;
        margin-bottom:${Theme.gSM};
        
        >span{
            padding:2px ${Theme.gSM};
            background:rgba(${Theme.secondary}, 0.1);
            cursor:pointer;
            margin-right:1px;

            :hover{
                background:rgba(${Theme.primary}, 1);
                color:rgba(${Theme.white},1);
            }
        }
        .selected{
            background:rgba(${Theme.primary}, 1);
            color:rgba(${Theme.white},1);
        }
    }

    >div.list{
        display:flex;
        flex-direction: column;
        max-height:640px;
        overflow:scroll;
        >span{
            cursor:pointer;
            margin-bottom:${Theme.gSM};
            padding:2px ${Theme.gSM};
            display:flex;

            >b{
                width:20px;
                margin-right:${Theme.gSM};
                font-weight:bold;
            }

            :hover{
                background:rgba(${Theme.secondary}, 0.1);
                color:rgba(${Theme.primary},1);
            }
        }
    }

`