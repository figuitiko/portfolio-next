import Header from '@/components/share/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/share/Footer'
import ProviderTheme from '@/components/share/ProviderTheme'
import DarkModeButton from '@/components/share/DarkModeButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frank Portfolio',
  description: 'Frank Portfolio'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0d1117] dark:bg-slate-50 duration-200`} >
          <ProviderTheme attribute='class' defaultTheme='system' enableSystem>
            <DarkModeButton />
           <Header />
            <main className='flex h-full w-full  flex-1 flex-col items-center justify-center px-4'>
                {children}
            </main>
        <Footer />
          </ProviderTheme>
      </body>
    </html>
  )
}
