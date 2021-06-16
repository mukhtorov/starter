import React from 'react'
import { Container } from './style'

export default (props) => {
    return (
        <Container>
            <h1>{props.location.pathname } Coming Soon</h1>
        </Container>
    )
}
