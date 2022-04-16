import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 100%;
`

export const ContainerHeader = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    background-color: #ced4da;
    padding: 1rem;
    position: relative;

    span {
        font-size: 1.2rem;
        font-weight: bold;
    }

    > a {
        text-decoration: none;
        color: inherit;
        svg {
            font-size: 2.5rem;
            cursor: pointer;
        }
    }

    form {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        position: absolute;
        bottom: -2rem;

        input {
            width: 20rem;
            height: 3.5rem;

            padding: 1rem;
            border-radius: 10px;
            border: 0;
        }

        button {
            width: 4rem;
            height: 3.5rem;
            border: 0;
            border-radius: 10px;
            color: white;
            background-color: #a3cef1;
        }
    }
`

export const ContainerList = styled.main`
    width: 100%;
    height: calc(100% - 5rem);

    > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        padding: 6rem 1rem 10rem 1rem;
        background-color: #e9ecef;
        overflow-y: auto;
     
    }

    footer {
        width: 100%;
        height: 4.5rem;
        display: grid;
        place-items: center;

        background-color: white;
        position: absolute;
        bottom: 0rem;

        button {
            width: 20rem;
            height: 3rem;

            border: 0;
            background: #007ea7;
            color: white;
            border-radius: 5px;

        }
    }
`