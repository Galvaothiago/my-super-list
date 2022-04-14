import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    place-items: center;
    position: absolute;
    inset: 0;
    z-index: 1;

    padding: 1rem;
    background-color: rgba(0, 0, 0, .7);
`

export const Modal = styled.div`
    max-width: 40rem;
    width: 100%;
    height: 80%;


    position: relative;
    background: #dee2e6;
    padding: 0 1rem;
    border-radius: 5px;

    > form {
        width: 100%;
        height: 14rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        /* background-color: red; */
    }

`

export const ExitButton = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;

    position: relative;
    top: -4rem;
    
    > div {
        width: 35px;
        height: 35px;

        display: grid;
        place-items: center;

        border-radius: 50%;
        background-color: #dee2e6;
        cursor: pointer;

        svg { 
            font-size: 1.5rem;
        }
    }

`

export const ContainerAddItem = styled.div`
    width: 100%;
    min-height: 20rem;
    height: auto;

    background-color: white;
    border-radius: 10px;
`