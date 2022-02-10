import { createGlobalStyle } from "styled-components"
import Theme from "./theme"

 export default createGlobalStyle`
    body, html{
        background:rgb(${Theme.white})!important;
        height: 100%!important;
        overflow-x: hidden!important;
        -webkit-overflow-scrolling: touch;

        margin: 0!important;
        padding: 0!important;
        min-width: unset!important;
        font-family:${Theme.secondaryFont}!important;
        ${Theme.fDF}!important;
        line-height: 1.4285em!important;
        color: rgba(${Theme.text}, 1)!important;
    }
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family:${Theme.secondaryFont}!important;
    }
    h1,h2,h3,h4,h5,h6{
        font-family:${Theme.primaryFont}!important;
        margin: 0;
        padding: 0;
    }
    h2{
        font-family:${Theme.primaryFont}!important;
        ${Theme.fXXL}!important;
        margin-bottom:${Theme.gXL};
    }
    h3{
        font-family:${Theme.primaryFont}!important;
        ${Theme.fXL}!important;
        margin-bottom:${Theme.gLG};
    }
    b{
        font-weight:bold;
    }
    #root {
        height: 100%!important;
    }
 `