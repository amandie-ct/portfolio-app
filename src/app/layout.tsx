'use client'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'
import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider } from 'styled-components'
import Theme from '@/styles/theme'

const poppins = Poppins({
  weight: ['200', '400', '500', '600', '800'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Portfólio | Amanda Carvalho',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>
            <ThemeProvider theme={Theme}>{children}</ThemeProvider>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
