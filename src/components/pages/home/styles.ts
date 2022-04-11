import styled from 'styled-components'

interface BackgroundProp {
    path: string
}

interface PositionProp {
    position: string,
}

interface PercentProp {
    percent: number
}

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 1rem 0;
`
export const ContainerButton = styled.section`
    width: 100%;
    height: 23rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;
    padding: 1rem;

`

export const Button = styled.div<BackgroundProp & PositionProp & PercentProp>`
    max-width: 15rem;
    width: 100%;
    height: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background: #e1e5ee;
    background-image: url(${({ path }) => path});
    background-repeat: no-repeat;
    background-size: ${({ percent }) => percent}%;
    background-position: ${({position}) => position};
    border-radius: 10px;

    span {
        width: 8rem;
        word-wrap: break-word;
        text-align: center;
        text-transform: uppercase;
        font-size: .9rem;
        font-weight: 300;
    }
`

export const IconButton = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: white;
    position: relative;

    svg {
        font-size: 2rem;
    }
`