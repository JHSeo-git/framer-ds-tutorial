import React, { useMemo } from 'react'
import type { GetStaticPaths, NextPage } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import Layout from '@components/Layout'
import { Container, Heading, Section } from '@framerds/react'
import MDXProvider from '@components/mdx/MDXProvider'
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx/mdx'
import { Frontmatter } from '@lib/types/mdx'
import { colorsRoutes } from '@lib/config/colorsRoutes'
import mdxComponents from '@components/mdx/mdxComponents'

type ColorsSubPageProps = {
  frontmatter: Frontmatter
  code: any
}

const ColorsSubPage: NextPage<ColorsSubPageProps> = ({ frontmatter, code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <Layout routes={colorsRoutes}>
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

/**
 * @see https://github.com/vercel/next.js/discussions/16522#discussioncomment-55590
 */
type Params = {
  params: {
    slug: string[]
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { frontmatter, code } = await getMdxBySlug(
    'colors/',
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
  const frontmatters = await getAllFrontmatter('colors')

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: {
        slug: frontmatter.slug.replace('colors/', '').split('/'),
      },
    })),
    // TODO: increamental Static Regeneration
    fallback: false,
  }
}

export default ColorsSubPage
