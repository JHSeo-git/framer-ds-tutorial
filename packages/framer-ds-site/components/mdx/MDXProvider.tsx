import React, { useContext } from 'react'
import { Frontmatter } from '@lib/types/mdx'

export type MDXProviderProps = {
  frontmatter: Frontmatter
  children: React.ReactNode
}

export const FrontmatterContext = React.createContext<Frontmatter>({} as any)
export function useFrontmatterValue() {
  return useContext(FrontmatterContext)
}

const MDXProvider = ({ frontmatter, children }: MDXProviderProps) => {
  return (
    <FrontmatterContext.Provider value={frontmatter}>
      {children}
    </FrontmatterContext.Provider>
  )
}

export default MDXProvider
