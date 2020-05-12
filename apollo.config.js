// this config file is only used by the yarn script graphql:download-schema
module.exports = {
    client: {
        includes: ['graphql/**/*.ts'],
        service: {
            name: 'backend',
            url: 'http://localhost:8081/graphql',
            headers: {
                'X-INTROSPECTION-PRIVATE-SCHEMA': true,
            },
        },
    },
}
