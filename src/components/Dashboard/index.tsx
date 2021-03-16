import React from 'react'

import { Summary } from '../Summary'
import { TransationsTable } from '../TransationsTable'

import { Container } from './styles'

export const Dashboard = () => {
    return (
        <Container>
            <Summary/>
            <TransationsTable/>
        </Container>
    )
}
