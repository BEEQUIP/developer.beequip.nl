import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as yup from 'yup'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import {
    Box,
    Button,
    FieldError,
    Form,
    Input,
    Notification,
} from '@beequip/hexagon'

const HorizontalField = styled.div`
    display: grid;
    gap: ${(props) => props.theme.spacing[2]}px;
    grid-template-columns: 125px 200px 100px;
    align-items: start;
`

const SmallInput = styled(Input)`
    font-size: ${(props) => props.theme.font.sizes.s};
    padding: 2px ${(props) => props.theme.spacing[1]}px;
    line-height: 30px;
    height: auto;
`

const SmallLabel = styled.label`
    display: block;
    padding: 12px 0;
    font-size: ${(props) => props.theme.font.sizes.s};
`

const validationSchema = yup.object().shape({
    emailAddress: yup
        .string()
        .email('Please enter a valid email address')
        .required('Please enter your email address'),
})

interface FormValues {
    emailAddress: string
}

function useSubcribe() {
    const [state, setState] = React.useState<'success' | 'error'>()
    const handlers = React.useMemo(
        () => ({
            subscribe: async (
                emailAddress: FormValues['emailAddress'],
                captchaCode: string
            ) => {
                try {
                    await fetch('/api/subscribe-to-newsletter', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            emailAddress: emailAddress,
                            captcha: captchaCode,
                        }),
                    })
                    setState('success')
                } catch (error) {
                    setState('error')
                }
            },
        }),
        []
    )

    return [state, handlers] as const
}

export function SubscribeForm(): JSX.Element {
    const initialValues: FormValues = {
        emailAddress: '',
    }
    const [subscriptionStatus, { subscribe }] = useSubcribe()
    const hcaptchaRef = React.useRef(null)

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={() => hcaptchaRef.current.execute()}
            validationSchema={validationSchema}
            validateOnChange={true}
            validateOnBlur={true}
            enableReinitialize={false}
        >
            {(props) => (
                <Box bottom={3}>
                    {subscriptionStatus === 'success' ? (
                        <Notification type="success">
                            Thanks for subscribing. We’ve sent you a message to
                            confirm your email address.
                        </Notification>
                    ) : subscriptionStatus === 'error' ? (
                        <Notification type="error">
                            Something went wrong and you have not been
                            subscribed. Please try again.
                        </Notification>
                    ) : (
                        <Form onSubmit={props.handleSubmit}>
                            <HorizontalField>
                                <SmallLabel htmlFor="emailAddress">
                                    Email address
                                </SmallLabel>
                                <div>
                                    <SmallInput
                                        type="text"
                                        name="emailAddress"
                                        id="emailAddress"
                                        placeholder="E.g. developer@example.com"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.emailAddress}
                                        hook="subscribe-email-address"
                                    />
                                    {props.touched.emailAddress &&
                                        props.errors.emailAddress && (
                                            <FieldError>
                                                {props.errors.emailAddress}
                                            </FieldError>
                                        )}
                                    <HCaptcha
                                        id="test"
                                        size="invisible"
                                        ref={hcaptchaRef}
                                        sitekey={
                                            process.env
                                                .NEXT_PUBLIC_HCAPTCHA_SITE_KEY
                                        }
                                        onVerify={(token: string) => {
                                            subscribe(
                                                props.values.emailAddress,
                                                token
                                            )
                                        }}
                                    />
                                </div>
                                <Button
                                    size="small"
                                    type="submit"
                                    hook="subcribe"
                                    kind="tertiary"
                                    loading={props.isSubmitting}
                                >
                                    Subscribe
                                </Button>
                            </HorizontalField>
                        </Form>
                    )}
                </Box>
            )}
        </Formik>
    )
}
