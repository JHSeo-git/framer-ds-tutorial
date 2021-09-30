import React from 'react'
import type { NextPage } from 'next'
import Layout from '@components/Layout'
import { colorsRoutes } from '@lib/config/colorsRoutes'

const ColorsPage: NextPage = () => {
  return <Layout routes={colorsRoutes}>ColorsPage</Layout>
}

export default ColorsPage
