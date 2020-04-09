import { NextPageContext } from 'next'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

export const createApolloClient = (initialState = {}, ctx: NextPageContext) => {
    const fetchOptions = {
        agent: null,
    }

    const httpLink = new HttpLink({
        uri: process.env.BEEQUIP_API,
        credentials: 'same-origin',
        fetch,
        fetchOptions,
    })

    return new ApolloClient({
        connectToDevTools: Boolean(ctx),
        ssrMode: Boolean(ctx),
        link: httpLink,
        cache: new InMemoryCache().restore(initialState),
    })
}
