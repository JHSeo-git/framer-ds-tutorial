import Layout from '@components/Layout'
import { mdxRoutes } from '@lib/config/mdxRoutes'
import { NextPage } from 'next'

export type MDXPageProps = {}

const MDXPage: NextPage = () => {
  return <Layout routes={mdxRoutes}>MDXPage</Layout>
}

export default MDXPage
