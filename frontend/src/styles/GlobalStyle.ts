  
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body {
        background-color: #121214;
        -webkit-font-smoothing: antialiased;
        
    }
    #root {
        max-width: 960;
        margin: 0 auto;
        padding: 40px 20px;
    }
    body, input, button {
        font: 16px Roboto, sans-serief;
    }
    button {
        cursor: pointer;
    }
`;