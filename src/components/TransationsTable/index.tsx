import React, { useEffect } from 'react'
import { api } from './api';
import { Container } from './styles'

export const TransationsTable = () => {
    useEffect(() => {
        api.get('/transations')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>16/03/2020</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td>- R$1.000</td>
                        <td>Casa</td>
                        <td>16/02/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
