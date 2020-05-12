import React from 'react'
import { Grid, GridColumn } from '@beequip/hexagon'
import { PublicCreateIntermediary_publicCreateIntermediary_intermediary as Intermediary } from '@beequip/dev-types/graphql/PublicCreateIntermediary'
import { CreateIntermediaryForm } from './CreateIntermediaryForm'
import { TokenResult } from './TokenResult'

export const RequestToken = () => {
    const [intermediaryData, setIntermediaryData] = React.useState<
        Intermediary
    >()
    const onReceiveData = (intermediary: Intermediary) => {
        setIntermediaryData(intermediary)
    }

    return (
        <Grid>
            <GridColumn xs={12} m={4}>
                <CreateIntermediaryForm onData={onReceiveData} />
            </GridColumn>
            <GridColumn xs={12} m={8}>
                {intermediaryData ? (
                    <TokenResult intermediary={intermediaryData} />
                ) : null}
            </GridColumn>
        </Grid>
    )
}
