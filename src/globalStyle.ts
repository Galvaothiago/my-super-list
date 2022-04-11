import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Ubuntu', sans-serif;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
      
    }
`

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    padding: .35rem;
    background: #f8f9fa;
`
export const Main = styled.main`
    width: 100%;
    height: calc(100% - 5rem);

    padding: 1rem 0;
`