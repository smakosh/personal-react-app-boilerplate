import styled from 'styled-components'

const Container = styled.div`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 980px) {
        width: 90%;
    }
    ${({ vertical }) => vertical && `
        height: 100vh;
        display: flex;
        justify-content: center;
    `}
`

export { Container }
