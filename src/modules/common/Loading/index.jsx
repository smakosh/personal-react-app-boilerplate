import React from 'react'
import Spinner from 'react-spinkit'
import styled from 'styled-components'

const Loading = () => (
	<Grid>
		<Spinner name="ball-scale-ripple" color="black" />
	</Grid>
)

const Grid = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;

    div {
        align-self: center;
    }
`

export { Loading }
