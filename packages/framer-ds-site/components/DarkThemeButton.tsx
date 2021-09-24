import { Button } from '@framerds/react'
import { useTheme } from 'next-themes'

export type DarkThemeButtonProps = {}

const DarkThemeButton = (props: DarkThemeButtonProps) => {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      kind="grayScale"
      shape="round"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </Button>
  )
}

export default DarkThemeButton
