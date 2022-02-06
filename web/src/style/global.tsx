import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;

}
body{
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colors.secondary};
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.colors.primary};
    }
}
`;
