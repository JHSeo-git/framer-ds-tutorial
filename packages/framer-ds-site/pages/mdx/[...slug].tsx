import React, { useMemo } from 'react'
import type { GetStaticPaths, NextPage } from 'next'
import Layout from '@components/Layout'
import { mdxRoutes } from '@lib/config/mdxRoutes'
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx/mdx'
import { getMDXComponent } from 'mdx-bundler/client'
import { Frontmatter } from '@lib/types/mdx'
import { Container, Heading, Section } from '@framerds/react'
import MDXProvider from '@components/mdx/MDXProvider'
import mdxComponents from '@components/mdx/mdxComponents'

type MDXSubPageProps = {
  frontmatter: Frontmatter
  code: any
}

const MDXSubPage: NextPage<MDXSubPageProps> = ({ frontmatter, code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <Layout routes={mdxRoutes}>
      <Section>
        <Container>
          <Heading size="h1" css={{ mb: '$space20' }}>
            {frontmatter.metaTitle}
          </Heading>
          <MDXProvider frontmatter={frontmatter}>
            <Component components={mdxComponents as any} />
          </MDXProvider>
        </Container>
      </Section>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string[]
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { frontmatter, code } = await getMdxBySlug(
    'mdx/',
    params.slug.join('/'),
  )

  return {
    props: {
      frontmatter,
      code,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const frontmatters = await getAllFrontmatter('colors')
  const frontmatters = await getAllFrontmatter('mdx')

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: {
        slug: frontmatter.slug.replace('mdx/', '').split('/'),
      },
    })),
    // TODO: increamental Static Regeneration
    fallback: false,
  }
}

export default MDXSubPage
