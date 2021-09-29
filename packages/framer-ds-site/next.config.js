/** @type {import('next').NextConfig} */
// const readingTime = require('reading-time')
// const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

module.exports = withMDX({
  reactStrictMode: true,
})
