import React from 'react'
import { Grid, GridColumn } from '@beequip/hexagon'
import { CreateIntermediaryMutation } from '@/__generated__/beehive'
import { CreateIntermediaryForm } from './create-intermediary-form'
import { TokenResult } from './token-result'

type Intermediary = NonNullable<
    NonNullable<
        CreateIntermediaryMutation['publicCreateIntermediary']
    >['intermediary']
>

export function RequestToken(): JSX.Element {
    const [intermediaryData, setIntermediaryData] =
        React.useState<Intermediary>()
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
