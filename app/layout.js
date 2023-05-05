import './globals.css'
import WppButton from '@/components/wpp-button'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='bg-my-white'>
        {children}
        <WppButton />
      </body>
    </html>
  )
}
