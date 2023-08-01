import React from 'react'

const FlexWrapper = ({ children, flexDirection, justify, align, gap, height, width }) => {
  const objStyle = {
    flexDirection: flexDirection || 'row',
    justifyContent: justify || 'flex-start',
    alignItems: align || 'flex-start',
    gap: gap || '0',
    height: height || '100%',
    width: width || '100%'
  }
  return (
    <div style={objStyle}>
      {children}
    </div>
  )
}

export default FlexWrapper
