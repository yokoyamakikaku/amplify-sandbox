import type { AppProps } from 'next/app'
import { Amplify, Auth } from 'aws-amplify'

import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
