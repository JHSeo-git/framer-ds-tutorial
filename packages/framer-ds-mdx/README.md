# React mdx components - Framer Design System Tutorial

MDX Component for Framer Design System

## MDX

mdx-bundler: MDX compiler + bundler
mdx 내에 `import` lib 하지 않더라도 쓸 수 있게 번들링 해준다.
`next-mdx-remote` 와는 다르게 bundle 작업이 추가되었기 때문에 고려하면서 작업한다.

[Usage]

```tsx
import { bundleMDX } from 'mdx-bundler'

const mdxSource = `
  ---
  title: Example Post
  published: 2021-02-13
  description: This is some description
  ---

  # Wahoo

  import Demo from './demo'

  Here's a **neat** demo:

  <Demo />
`.trim()

const result = await bundleMDX(mdxSource, {
  files: {
    './demo.tsx': `
      import * as React from 'react'

      function Demo() {
        return <div>Neat demo!</div>
      }

      export default Demo
    `,
  },
})

const { code, frontmatter } = result
```

```tsx
import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

function Post({ code, frontmatter }) {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  )
}
```

or substituction

```tsx
import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

const Paragraph: React.FC = (props) => {
  if (typeof props.children !== 'string' && props.children.type === 'img') {
    return <>{props.children}</>
  }

  return <p {...props} />
}

function MDXPage({ code }: { code: string }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <main>
      <Component components={{ p: Paragraph }} />
    </main>
  )
}
```
