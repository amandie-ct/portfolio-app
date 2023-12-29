import { Poppins } from 'next/font/google'
import { Providers } from './providers'
import StyledComponentsRegistry from '@/lib/registry'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
