export type FDSLogoProps = {
  label?: string
} & React.ComponentPropsWithoutRef<'svg'>

/**
 *  TODO: Accessible
 *  defaultColor: #56CCF2
 *  @see https://github.com/radix-ui/primitives/blob/main/packages/react/accessible-icon/src/AccessibleIcon.tsx
 */

const FDSLogo = ({ label = 'FDS Logo', ...rest }: FDSLogoProps) => {
  return (
    <>
      <span
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        FDS Homepage
      </span>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <circle cx="47.5" cy="16.5" r="7.5" fill="currentColor" />
        <circle cx="17.5" cy="46.5" r="7.5" fill="currentColor" />
        <rect x="25" y="9" width="15" height="15" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 54C33.2843 54 40 47.2843 40 39C40 30.7157 33.2843 24 25 24V54Z"
          fill="currentColor"
        />
      </svg>
    </>
  )
}

export default FDSLogo