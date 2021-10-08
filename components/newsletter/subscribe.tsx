import { Heading, Text } from '@beequip/hexagon'
import { SubscribeForm } from './subscribe-form'

export function Subscribe(): JSX.Element {
    return (
        <div>
            <Heading margin={0} size={5}>
                Get updates
            </Heading>
            <Text bottomMargin={2} size="s">
                Stay up to date with changes in Beequip’s integrations.
            </Text>
            <SubscribeForm />
        </div>
    )
}
