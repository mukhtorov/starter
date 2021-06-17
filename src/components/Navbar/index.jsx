import React from 'react'
import { Container, LogoWrapper, Menu, activeStyle } from './style'
// import logoImg from '../../assets/imgs/logo.png'
import { navbar } from '../../utils/navbar'
import { useHistory} from 'react-router-dom'

export default () => {
    const history = useHistory()
    return (
        <Container>
            <LogoWrapper onClick={()=>history.push('/home')}>
                {/* <LogoWrapper.Icon src={logoImg} /> */}
                <LogoWrapper.Title>CSS Animation</LogoWrapper.Title>
            </LogoWrapper>
            <Menu>
                {
                    navbar.map(({title, path})=>(
                        <Menu.Item to={path} activeStyle={activeStyle} >{title }</Menu.Item>
                    ))
                }
            </Menu>
        </Container>
    )
}
