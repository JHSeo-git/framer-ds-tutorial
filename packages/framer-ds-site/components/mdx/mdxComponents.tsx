import { ComponentMap } from 'mdx-bundler/client'
import mdxPrimitiveComponents from './mdxPrimitiveComponents'
import mdxCustomComponents from './mdxCustomComponents'

const mdxComponents: ComponentMap = {
  /**
   * this is primitives components
   * with design system.
   */
  ...mdxPrimitiveComponents,

  /**
   * this is custom components
   * for mdx component
   */
  ...mdxCustomComponents,
}

export default mdxComponents
