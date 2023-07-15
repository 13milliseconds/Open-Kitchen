import React from 'react'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <div>
      <Head>
        <title>Open Kitchen</title>
      </Head>
      <h1 className='text-3xl font-bold'>Open Kitchen V1</h1>
      <Component {...pageProps} />
    </div>
}
