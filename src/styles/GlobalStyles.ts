import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /*
    Resetting the defautls styles. Using border box to put the border inside the element.
    */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;