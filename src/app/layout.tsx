'use client'

import { Provider } from 'react-redux'
import store from '@/reduxx/store'
import CartProvider from './(auth)/cartcontext'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <Provider store={store}>
            <CartProvider>{children}</CartProvider>
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
