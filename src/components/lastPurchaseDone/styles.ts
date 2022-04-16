import styled from 'styled-components'

export const Container = styled.div`
    width: 100%; 
    height: 6rem;
    display: flex;
    justify-content: space-between;

    /* background: #ada7ff; */
    background: rgba(163,206,241,.3);
    padding: 1rem;

    > div:nth-child(1) {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        font-size: .9rem;
        font-weight: bold;
        color: #393d3f;
        /* color: white; */
 
    }

    > div:nth-child(2) {
        height: 100%;
        display: flex;
        align-items: center;
        color: #393d3f;

        span {
            font-size: 1.3rem;
            font-weight: bold;

            padding: .3rem;
            border-radius: 3px;
            background: white;  
        }
    }

`

export const Icon = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    gap: .6rem;

    time {
        font-size: .9rem;
    }

    
`