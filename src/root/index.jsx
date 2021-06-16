import React from 'react'
import { Container } from './style'
import { navbar } from '../utils/navbar'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

export default () => {
    return (
        <Container>
            <Router>
               {
                    navbar.map(({ path, component }) => (
                        <Route path={ path} component={component} />
                    ))
                }
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Router>
        </Container>
    )
}
