import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import React from 'react'

function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AppRouterCacheProvider options={{ key: 'css' }}>
        {children}
      </AppRouterCacheProvider>
    </>
  )
}

export default layout
