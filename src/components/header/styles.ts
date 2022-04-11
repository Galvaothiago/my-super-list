import styled from 'styled-components';

export const Container = styled.header`
    max-width: 100vw;
    width: 100%;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    background-color: white;

    -webkit-box-shadow: 3px -1px 32px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px -1px 32px -9px rgba(0,0,0,0.75);
    box-shadow: 3px -1px 32px -9px rgba(0,0,0,0.75);

`
export const Text = styled.div`
    max-width: 15rem;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    word-wrap: break-word;
    text-align: center;

    font-size: 1.15rem;
`

export const Menu = styled.div`
    svg { 
        font-size: 2.1rem;
    }
`