import React, { useMemo } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import Layout from '@components/Layout'
import { Frontmatter } from '@lib/types/mdx'
import { Heading } from '@framerds/react'
import MDXProvider from '@components/mdx/MDXProvider'
import { getAllFrontmatter } from '@lib/mdx/mdx'

type DocsSubPageProps = {
  frontmatter: Frontmatter
  code: any
}

const DocsSubPage: NextPage<DocsSubPageProps> = ({ frontmatter, code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <Layout>
      <Heading>{frontmatter.metaTitle}</Heading>
      <MDXProvider frontmatter={frontmatter}>
        <Component />
      </MDXProvider>
    </Layout>
  )
}

export default DocsSubPage
