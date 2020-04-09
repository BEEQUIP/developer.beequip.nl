import React from 'react'
import { Card, Heading, Body, Cell, Row, Table } from '@beequip/hexagon'
import { PublicCreateIntermediary_publicCreateIntermediary_intermediary as Intermediary } from '@beequip/dev-types/graphql/PublicCreateIntermediary'

interface Props {
    intermediary: Intermediary
}

export const TokenResult = ({ intermediary }: Props) => {
    return (
        <Card>
            <Heading size={4}>Your data</Heading>
            <Table>
                <Body>
                    {intermediary.name && (
                        <Row>
                            <Cell>Company name</Cell>
                            <Cell>{intermediary.name}</Cell>
                        </Row>
                    )}
                    {intermediary.cocNumber && (
                        <Row>
                            <Cell>Chamber of Commerce number</Cell>
                            <Cell>{intermediary.cocNumber}</Cell>
                        </Row>
                    )}
                    {intermediary.token && (
                        <Row>
                            <Cell>Token</Cell>
                            <Cell>{intermediary.token}</Cell>
                        </Row>
                    )}
                </Body>
            </Table>
        </Card>
    )
}
