import React from 'react'
import { Card, Heading, Body, Cell, Row, Table } from '@beequip/hexagon'
import { CreateIntermediaryMutation } from '@/__generated__/beehive'

interface Props {
    intermediary: NonNullable<
        NonNullable<
            CreateIntermediaryMutation['publicCreateIntermediary']
        >['intermediary']
    >
}

export function TokenResult({ intermediary }: Props): JSX.Element {
    return (
        <Card>
            <Heading level="4">Your data</Heading>
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
