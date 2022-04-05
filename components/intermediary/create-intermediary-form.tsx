import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { Box, Button, Field, Form, Input } from '@beequip/hexagon'
import { usePublicCreateIntermediary } from '@/graphql/mutations/usePublicCreateIntermediary'
import { getGraphQLError } from '@/utility/graphqlError'

const validationSchema = yup.object().shape({
    name: yup.string().required('Please enter your company name'),
    cocNumber: yup
        .string()
        .required(
            'Please enter the Chamber of Commerce number of your company'
        ),
})

interface FormValues {
    name: string
    cocNumber: string
}

interface Props {
    onData: any
}

export function CreateIntermediaryForm(props: Props): JSX.Element {
    const initialValues: FormValues = {
        name: '',
        cocNumber: '',
    }

    const [
        publicCreateIntermediary,
        { loading: mutationLoading, error: mutationError },
    ] = usePublicCreateIntermediary()

    const handleSubmit = async (
        values: FormValues,
        actions: FormikHelpers<FormValues>
    ) => {
        try {
            const result = await publicCreateIntermediary({
                variables: {
                    input: values,
                },
            })
            props.onData(result.data?.publicCreateIntermediary.intermediary)
        } catch (error) {
            actions.setStatus('Something went wrong')
        } finally {
            actions.setSubmitting(false)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnChange={true}
            validateOnBlur={true}
            enableReinitialize={false}
        >
            {(props) => (
                <Box bottom={3}>
                    <Form onSubmit={props.handleSubmit}>
                        <Field
                            label="Company name"
                            htmlFor="name"
                            error={
                                (props.touched.name && props.errors.name) ||
                                getGraphQLError('name', mutationError)
                            }
                        >
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="For example ‘Beequip’"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.name}
                                hook={'create-intermediary-field-name'}
                            />
                        </Field>

                        <Field
                            label="Chamber of Commerce number"
                            htmlFor="cocNumber"
                            error={
                                props.touched.cocNumber &&
                                props.errors.cocNumber
                            }
                        >
                            <Input
                                type="text"
                                name="cocNumber"
                                id="cocNumber"
                                placeholder="For example ‘63204258’"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.cocNumber}
                                hook={'create-intermediary-field-coc-number'}
                            />
                        </Field>

                        <Button
                            type="submit"
                            hook={'save-intermediary'}
                            loading={mutationLoading}
                        >
                            Request token
                        </Button>
                    </Form>
                </Box>
            )}
        </Formik>
    )
}
