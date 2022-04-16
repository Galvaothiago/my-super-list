import styled from 'styled-components'

interface BgProps {
    bg: string
}

export const Container = styled.div<BgProps>`
    width: 100%;
    max-height: 4rem;
    min-height: 4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: .5rem;
    background-color: #f8f9fa;

    span { 
        min-width: 2rem;
        width: auto;
        height: 2rem;
        border-radius: 5px;
        text-align: center;
        line-height: 2rem;
        padding: 0 .3rem;

        background-color: ${({ bg }) => bg};
    }

    p { 
        width: 70%;
        margin: 0;
        word-wrap: break-word;
        text-align: center;
    }

    svg {
        font-size: 1.5rem;
        cursor: pointer;
        
    }
`