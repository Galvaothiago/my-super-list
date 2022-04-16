import styled from 'styled-components'

export const IconCart = styled.div`
    width: 3rem;
    height: 3rem;

    display: grid;
    place-items: center;
    border-radius: 3px;

    position: relative;

    background-color: #393d3f;

    svg {
        font-size: 1.9rem;
        color: #a3cef1;
    }
`

export const BadgeItems = styled.span`
    min-width: 1.5rem;
    width: auto;
    height: 1rem;

    line-height: 1rem;
    border-radius: 10px;
    background: white;

    padding: 0 .2rem;
    position: absolute;
    top: -.2rem;
    right: -.2rem;

    font-size: .6rem;
    font-weight: bold;
`