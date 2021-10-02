import fsPrmoise from 'fs/promises'
import { bundleMDXFile } from 'mdx-bundler'
import path from 'path'
import glob from 'glob'
import readingTime from 'reading-time'
import { Frontmatter } from '@lib/types/mdx'
import matter from 'gray-matter'

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

export const getMdxBySlug = async (basePath: string, slug: string) => {
  const mdxPath = path.join(DATA_PATH, basePath, `${slug}.mdx`)

  const { frontmatter, code } = await bundleMDXFile(mdxPath, {})

  return {
    frontmatter: {
      ...frontmatter,
      slug,
      readingTime: readingTime(code),
    } as Frontmatter,
    code,
    matter,
  }
}
