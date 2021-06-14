import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    /* margin: 0 auto; */
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    /* width: 100vw;
    margin: 0 auto; */
    /* height: 100vh; */
    background: ${(props) => props.theme.colors.background};
    font-family: "rubik", sans-serif;
    /* color: white; */
    font-size: 1rem;
}

a{
    text-decoration: none;
    color: white;
}
`;
