import { Box, Code, Pre } from '@framerds/react'
import { useEffect, useRef, useState } from 'react'

export type CodeBlockProps = {
  children: React.ReactNode
  className: string
  filename?: string
  line?: string
  id?: string
}

const CodeBlock = ({
  children,
  className,
  filename,
  line,
  id,
}: CodeBlockProps) => {
  const [code, setCode] = useState<string | undefined>(undefined)
  const [hasCopied, setHasCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (preRef.current) {
      const codeEl = preRef.current.querySelector('code')
      const code = codeEl?.innerText.replace(/\n{3,}/g, '\n')
      setCode(code)
    }
  }, [preRef])

  useEffect(() => {
    if (hasCopied) {
      // copy
    }
    setTimeout(() => setHasCopied(false), 1500)
  }, [hasCopied])

  // TODO:
  // Pre component 에 아래처럼 overflow div와 button을 가진 component로
  // 만들어도 나쁠지 않을 것 같음
  return (
    <Box
      as="section"
      css={{
        position: 'relative',
        my: '$space45',
      }}
    >
      <Box
        css={{
          overflow: 'auto',
          borderRadius: '$radius8',
          bc: '$primary2',
          py: '$space20',
        }}
      >
        <Pre
          ref={preRef}
          id={id}
          variant="primary"
          css={{
            py: 0,
            my: 0,
            bc: 'inherit',
            float: 'left',
            minWidth: '100%',
            outline: 'none',
            border: 'none',
            bs: 'none',
          }}
        >
          <Code variant="inherit">{children}</Code>
        </Pre>
      </Box>
    </Box>
  )
}

export default CodeBlock
