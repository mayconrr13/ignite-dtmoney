import React from 'react'

import { Container, Content } from './styles'

import logoImg from '../../assets/logo.svg'

export const Header = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo"/>
                <button type="button">Nova transação</button>
            </Content>
        </Container>
    )
}
