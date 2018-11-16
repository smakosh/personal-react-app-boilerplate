import styled from 'styled-components'

export const Card = styled.div`
    padding: 2rem;
    border: 1px solid #212121;
    align-self: center;
    width: 90%;
    margin: 0 auto;

    ${({ register }) => register && `
        width: 60%;
    `}
`

export const Center = styled.div`
    text-align: center;
`
