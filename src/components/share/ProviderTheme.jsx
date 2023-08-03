'use client'

import { ThemeProvider } from 'next-themes'

const ProviderTheme = ({ children, ...props }) => {
  return <ThemeProvider { ...props }>{children}</ThemeProvider>
}

export default ProviderTheme
