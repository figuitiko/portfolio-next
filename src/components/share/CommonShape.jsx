const CommonShape = ({ children, borderRadio, height, width, padding, flexDirection, gap, alignItems, justify }) => {
  const styleObj = {
    borderRadius: borderRadio || '16px',
    width: width || '100px',
    height: height || '100px',
    padding: padding || '16px',
    flexDirection: flexDirection || 'row',
    gap: gap || '4px',
    alignItems: alignItems || 'flex-start',
    justify: justify || 'flex-start'
  }
  return (
    <div className='flex gradient-shape hover:scale-105' style={styleObj}>
      {children}
    </div>
  )
}

export default CommonShape
