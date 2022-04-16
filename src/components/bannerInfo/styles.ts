import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: space-between;

    background: white;
    background: linear-gradient(270deg, rgba(163,206,241,1) 0%, rgba(245,243,243,1) 43%);

    padding: 1rem;

    border-radius: 9px;
    border: 1px solid #a3cef1;
    color: #393d3f;

    -webkit-box-shadow: 3px -1px 17px -15px rgba(0,0,0,0.84);
    -moz-box-shadow: 3px -1px 17px -15px rgba(0,0,0,0.84);
    box-shadow: 3px -1px 17px -15px rgba(0,0,0,0.84);

    > span { 
        font-size: 1.15rem;
        font-weight: 600;
    }
`

export const InfoPurchase = styled.div`
    width: 15rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    > div {
        text-align: center;

        h4 { 
            font-size: .9rem;
            font-weight: 300;
            margin-bottom: .1rem;
        }

        p {
            font-size: .77rem;
            font-weight: 600
        }
    }
`
