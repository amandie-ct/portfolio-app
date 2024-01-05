'use client'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'
import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider } from 'styled-components'
import Theme from '@/styles/theme'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['200', '400', '500', '600', '800'],
  subsets: ['latin']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>Portfólio | Amanda Carvalho</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <html lang="en">
        <body className={poppins.className}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={Theme}>
              <Providers>{children}</Providers>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
