import React from 'react'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import AuthProvider from '@/context/authProvider'
import Header from '@/components/Header/Header'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <div>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </div>
}
