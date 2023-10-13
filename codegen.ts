import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: ['http://localhost:8081/graphql'],
    documents: ['src/graphql/**/*.graphql'],
    generates: {
        '__generated__/beehive.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
        },
    },
    hooks: { afterAllFileWrite: ['prettier --write'] },
}
export default config
