import React from 'react'
import styled from 'styled-components'

const InputField = ({ label, children }) => (
	<Wrapper>
		<Label>{label}</Label>
		{children}
	</Wrapper>
)

const Wrapper = styled.div`
    padding: 1rem 0;

    input {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-sizing: border-box;
        text-align: left;
        -webkit-appearance: none;
        transition: all 0.2s ease 0s;
        border-width: 1px;
        border-color: rgb(33, 33, 33);
        border-style: solid;
        border-radius: 2px;
        padding: 0.6rem 1rem;
    }
`

const Label = styled.label`
    margin-bottom: 1rem;
`

export { InputField }
