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
        ${Theme.primaryFont}!important;
        ${Theme.fDF}!important;
        line-height: 1.4285em!important;
        color: rgba(${Theme.text}, 1)!important;
    }
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
        background:'#000000'
    }
    h1,h2,h3,h4,h5,h6{
        ${Theme.primaryFont}!important;
        margin: 0;
        padding: 0;
    }
    #root {
        height: 100%!important;
    }
 `