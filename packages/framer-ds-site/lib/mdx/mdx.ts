import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import fsPrmoise from 'fs/promises'
import remarkSlug from 'remark-slug'
import readingTime from 'reading-time'
import { bundleMDXFile } from 'mdx-bundler'
import { Frontmatter } from '@lib/types/mdx'
import rehypePrism from '@mapbox/rehype-prism'
import rehypeMetaAttribute from '@lib/mdx/rehype-meta-attribute'

const DATA_PATH = path.join(process.cwd(), 'data')

export const getAllFrontmatter = async (targetPath?: string) => {
  const rootPath = path.join(DATA_PATH, targetPath ?? '')
  const paths = glob.sync(`${rootPath}/**/*.mdx`)

  const allFrontmatter = await Promise.all(
    paths.map(async (path) => {
      const source = await fsPrmoise.readFile(path)
      const { data: frontmatter, content } = matter(source)
      return {
        ...frontmatter,
        slug: path.replace(`${DATA_PATH}/`, '').replace('.mdx', ''),
        readingTime: readingTime(content),
      } as Frontmatter
    }),
  )

  return allFrontmatter.sort(
    (a, b) =>
      Number(new Date(b.publishedAt ?? 0)) -
      Number(new Date(a.publishedAt ?? 0)),
  )
}

export const getMdxBySlug = async (targetPath: string, slug: string) => {
  const rootPath = path.join(DATA_PATH, targetPath, `${slug}.mdx`)

  const { frontmatter, code } = await bundleMDXFile(rootPath, {
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // remark plugins
        remarkSlug,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // rehype plugins
        rehypePrism,
        rehypeMetaAttribute,
      ]
      return options
    },
  })

  return {
    frontmatter: {
      ...frontmatter,
      slug,
      readingTime: readingTime(code),
    } as Frontmatter,
    code,
  }
}
