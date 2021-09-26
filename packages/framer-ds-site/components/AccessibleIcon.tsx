export type AccessibleIconProps = {
  label: string
  children: React.ReactNode
}

const AccessibleIcon = ({ label, children }: AccessibleIconProps) => {
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
        {label}
      </span>
      {children}
    </>
  )
}

export default AccessibleIcon
