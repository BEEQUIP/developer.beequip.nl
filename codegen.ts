import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    generates: {
        '__generated__/beehive.ts': {
            schema: 'http://localhost:8081/graphql',
            documents: 'src/graphql/**/*.graphql',
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                onlyOperationTypes: true,
            },
        },
    },
    hooks: { afterAllFileWrite: ['prettier --write'] },
}
export default config
