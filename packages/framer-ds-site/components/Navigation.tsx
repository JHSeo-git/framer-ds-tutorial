import NextLink from 'next/link'
import { Box, Heading } from '@framerds/react'

export type NavigationProps = {}

const NavHeading = ({ children }: { children: React.ReactNode }) => (
  <Heading
    size="h4"
    css={{
      px: '$space20',
      py: '$space10',
    }}
  >
    {children}
  </Heading>
)

type NavItemProps = {
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
  href: string
} & React.ComponentProps<typeof Box>

const NavItem = ({
  children,
  active,
  disabled,
  href,
  ...rest
}: NavItemProps) => {
  const isExternal = href.startsWith('http')

  return (
    <Box
      as={isExternal || disabled ? 'span' : NextLink}
      {...(isExternal || disabled ? {} : { href, passHref: true })}
    >
      <Box
        {...rest}
        {...(isExternal ? { href, target: '_blank' } : {})}
        as={disabled ? 'div' : 'a'}
        css={{
          // reset
          userSelect: 'none',
          textDecoration: 'none',
          ...(disabled ? { pointerEvents: 'none' } : {}),
          display: 'flex',
          ai: 'center',
          px: '$space20',
          py: '$space10',
          color: disabled ? '$mono10' : '$hiContrast',
          bc: active ? '$secondary3' : '$transparent',
          brd: active ? '$mono3' : '$transparent',
          minHeight: '$size45',
          '@hover': {
            '&:hover': {
              bc: !active && '$secondary2',
            },
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

const Navigation = {
  NavHeading,
  NavItem,
}

export { NavHeading, NavItem }
export default Navigation
