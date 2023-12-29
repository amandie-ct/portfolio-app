import { Playfair_Display } from 'next/font/google'
import { Providers } from './providers'
import StyledComponentsRegistry from '@/lib/registry'

const playfairDisplay = Playfair_Display({ weight: '500', subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
