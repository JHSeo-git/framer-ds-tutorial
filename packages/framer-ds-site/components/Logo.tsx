import AccessibleIcon from './AccessibleIcon'

export type LogoProps = {
  label?: string
} & React.ComponentPropsWithoutRef<'svg'>

/**
 *  TODO: Accessible
 *  defaultColor: #56CCF2
 *  @see https://github.com/radix-ui/primitives/blob/main/packages/react/accessible-icon/src/AccessibleIcon.tsx
 */

const Logo = ({ label = 'FDS Logo', ...rest }: LogoProps) => {
  return (
    <AccessibleIcon label={label}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <circle cx="48.5" cy="16.5" r="7.5" fill="currentColor" />
        <circle cx="16.5" cy="47.5" r="7.5" fill="currentColor" />
        <rect x="25" y="9" width="15" height="15" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 55C33.2843 55 40 48.2843 40 40C40 31.7157 33.2843 25 25 25V55Z"
          fill="currentColor"
        />
      </svg>
    </AccessibleIcon>
  )
}

export default Logo
