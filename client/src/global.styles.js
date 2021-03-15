import {createGlobalStyle} from 'styled-components';

 export const GlobalStyle = createGlobalStyle`
 body{
    font-family: 'Bebas Neue';
    padding: 20px 60px;

    //anything below 800px will be applied
    @media screen and (max-width: 800px){
       padding: 10px; 
    }
}

a{
    text-decoration: none;
    color: black;
}

*{
    box-sizing: border-box;
}
 `;

