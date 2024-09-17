'use client'
import '@/app/globals.css'

import { Provider } from 'react-redux'
import store from '@/reduxx/store'
import CartProvider from '../cartcontext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Provider store={store}>
          <CartProvider>{children}</CartProvider>
        </Provider>
      </body>
    </html>
  )
}
