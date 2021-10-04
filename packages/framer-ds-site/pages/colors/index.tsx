import React from 'react'
import type { NextPage } from 'next'
import Layout from '@components/Layout'
import { colorsRoutes } from '@lib/config/colorsRoutes'
import { Link } from '@framerds/react'

const ColorsPage: NextPage = () => {
  return (
    <Layout routes={colorsRoutes}>
      ColorsPage
      <Link>test</Link>
    </Layout>
  )
}

export default ColorsPage
