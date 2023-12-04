# Snippets

This directory contains MDX content that’s used in multiple places. This can be a whole page, or just a few sentences.

To import a snippet in your MDX file:

```mdx
import GraphQLErrorHandling from '@/snippets/graphql-error-handling.mdx'

<GraphQLErrorHandling />
```

You can also send variables to the snippet:

```mdx
import GraphQLErrorHandling from '@/snippets/graphql-error-handling.mdx'

<GraphQLErrorHandling query="Test" />
```

Inside `graphql-error-handling.mdx`:

```mdx
# Error handling

To handle errors in the query {props.query} (…)
```
