import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (request: NextApiRequest, response: NextApiResponse) => {
    const apiKey = process.env.CAMPAIGN_MONITOR_API_KEY
    const listId = process.env.CAMPAIGN_MONITOR_LIST_ID

    const { body, method } = request
    const { emailAddress, captcha } = body

    if (method !== 'POST') {
        return response.status(404).send('Not found')
    }

    if (!emailAddress || !captcha) {
        return response.status(422).json({
            message:
                'Unproccesable request, please provide the required fields',
        })
    }

    try {
        const captchaResponse = await fetch('https://hcaptcha.com/siteverify', {
            headers: {
                'Content-Type':
                    'application/x-www-form-urlencoded; charset=utf-8',
            },
            body: `response=${captcha}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
            method: 'POST',
        })
        const captchaValidation = await captchaResponse.json()

        if (captchaValidation.success) {
            await fetch(
                `https://api.createsend.com/api/v3.2/subscribers/${listId}.json`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Basic ${Buffer.from(
                            `${apiKey}:$x`,
                            'binary'
                        ).toString('base64')}`,
                    },
                    body: JSON.stringify({
                        EmailAddress: emailAddress,
                        ConsentToTrack: 'No',
                    }),
                }
            )

            return response.status(200).send('OK')
        }

        return response.status(422).json({
            message: 'Unproccesable request, Invalid captcha code',
        })
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        return response.status(422).json({ message: 'Something went wrong' })
    }
}
