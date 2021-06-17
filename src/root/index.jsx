import React from 'react'
import { Container } from './style'
import { navbar } from '../utils/navbar'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from '../components/Navbar'
export default () => {
    return (
        <Container>
            <Router>
                <Navbar />
                <Switch>

               {
                   navbar.map(({ path, component }) => (
                       <Route path={ path} component={component} />
                       ))
                    }
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                    </Switch>
            </Router>
        </Container>
    )
}
